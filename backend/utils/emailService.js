const nodemailer = require('nodemailer');

// Get email configuration from environment
const getEmailConfig = () => {
  return {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    fromName: process.env.EMAIL_FROM_NAME || 'Garbet Platform',
  };
};

// Create transporter
let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    const config = getEmailConfig();
    if (!config.auth.user || !config.auth.pass) {
      console.warn('Email service not configured. SMTP credentials missing.');
      return null;
    }

    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    });
  }
  return transporter;
};

// -------------------------------------------
// @desc    Send email
// @route   Internal
// -------------------------------------------
const sendEmail = async (to, subject, html, text = null) => {
  try {
    const config = getEmailConfig();
    const emailTransporter = getTransporter();

    if (!emailTransporter) {
      console.warn('Email service not available. Email not sent.');
      return false;
    }

    const mailOptions = {
      from: `"${config.fromName}" <${config.from}>`,
      to,
      subject,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
      html,
    };

    const info = await emailTransporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email send error:', error.message);
    return false;
  }
};

// -------------------------------------------
// @desc    Send welcome email
// -------------------------------------------
exports.sendWelcomeEmail = async (user) => {
  const subject = 'Hoş Geldiniz - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f1c84b;">Hoş Geldiniz ${user.firstName}!</h2>
      <p>Garbet Platform'a kaydolduğunuz için teşekkür ederiz.</p>
      <p>Kullanıcı adınız: <strong>${user.username}</strong></p>
      <p>Hesabınızı aktifleştirmek için giriş yapabilirsiniz.</p>
      <p>İyi eğlenceler!</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send deposit approved email
// -------------------------------------------
exports.sendDepositApprovedEmail = async (user, amount) => {
  const subject = 'Yatırım Onaylandı - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981;">Yatırım Onaylandı</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>Yatırım talebiniz onaylandı ve hesabınıza yansıtıldı.</p>
      <p><strong>Tutar:</strong> ₺${amount.toFixed(2)}</p>
      <p>Yeni bakiyeniz: ₺${(user.balance + amount).toFixed(2)}</p>
      <p>İyi eğlenceler!</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send withdrawal approved email
// -------------------------------------------
exports.sendWithdrawalApprovedEmail = async (user, amount, iban) => {
  const subject = 'Çekim Onaylandı - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981;">Çekim Onaylandı</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>Çekim talebiniz onaylandı ve ödeme yapıldı.</p>
      <p><strong>Tutar:</strong> ₺${amount.toFixed(2)}</p>
      <p><strong>IBAN:</strong> ${iban}</p>
      <p>Para transferi 1-3 iş günü içinde hesabınıza yansıyacaktır.</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send KYC approved email
// -------------------------------------------
exports.sendKYCApprovedEmail = async (user) => {
  const subject = 'KYC Onaylandı - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981;">KYC Doğrulama Onaylandı</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>KYC belgeleriniz incelendi ve onaylandı.</p>
      <p>Hesabınız tam olarak aktifleştirildi.</p>
      <p>İyi eğlenceler!</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send password reset email
// -------------------------------------------
exports.sendPasswordResetEmail = async (user, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
  const subject = 'Şifre Sıfırlama - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f1c84b;">Şifre Sıfırlama</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>Şifre sıfırlama talebinde bulundunuz.</p>
      <p>Şifrenizi sıfırlamak için aşağıdaki bağlantıya tıklayın:</p>
      <p><a href="${resetUrl}" style="background-color: #f1c84b; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Şifreyi Sıfırla</a></p>
      <p>Bu bağlantı 1 saat geçerlidir.</p>
      <p>Eğer bu talebi siz yapmadıysanız, bu e-postayı görmezden gelebilirsiniz.</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send support ticket response email
// -------------------------------------------
exports.sendSupportResponseEmail = async (user, ticket, response) => {
  const subject = `Destek Talebi Yanıtı - ${ticket.subject}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f1c84b;">Destek Talebi Yanıtı</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>Destek talebinize yanıt verildi:</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Konu:</strong> ${ticket.subject}</p>
        <p><strong>Yanıt:</strong></p>
        <p>${response}</p>
      </div>
      <p>Destek talebinizi görüntülemek için hesabınıza giriş yapabilirsiniz.</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

// -------------------------------------------
// @desc    Send bonus unlock email
// -------------------------------------------
exports.sendBonusUnlockEmail = async (user, bonusAmount) => {
  const subject = 'Bonus Açıldı - Garbet Platform';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981;">Tebrikler! Bonusunuz Açıldı</h2>
      <p>Merhaba ${user.firstName},</p>
      <p>Bonus rollover şartlarını tamamladınız ve bonusunuz açıldı!</p>
      <p><strong>Açılan Bonus:</strong> ₺${bonusAmount.toFixed(2)}</p>
      <p>Bu tutar ana bakiyenize eklendi ve çekilebilir durumda.</p>
      <p>İyi eğlenceler!</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Bu bir otomatik e-postadır. Lütfen yanıtlamayın.</p>
    </div>
  `;

  return await sendEmail(user.email, subject, html);
};

module.exports = {
  sendEmail,
  sendWelcomeEmail: exports.sendWelcomeEmail,
  sendDepositApprovedEmail: exports.sendDepositApprovedEmail,
  sendWithdrawalApprovedEmail: exports.sendWithdrawalApprovedEmail,
  sendKYCApprovedEmail: exports.sendKYCApprovedEmail,
  sendPasswordResetEmail: exports.sendPasswordResetEmail,
  sendSupportResponseEmail: exports.sendSupportResponseEmail,
  sendBonusUnlockEmail: exports.sendBonusUnlockEmail,
};

