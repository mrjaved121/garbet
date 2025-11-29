const User = require('../models/User.model');
const { getFileUrl, deleteFile } = require('../utils/upload');

// -------------------------------------------
// @desc    Submit KYC documents
// @route   POST /api/user/kyc-submit
// @access  Private
// -------------------------------------------
exports.submitKYC = async (req, res) => {
  try {
    const userId = req.user.id;
    const { idFront, idBack, addressProof } = req.body;

    // Get user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Update KYC documents (file paths from upload middleware)
    const updates = {};
    if (idFront) updates['kycDocuments.idFront'] = idFront;
    if (idBack) updates['kycDocuments.idBack'] = idBack;
    if (addressProof) updates['kycDocuments.addressProof'] = addressProof;

    // If at least one document is provided, set status to pending
    if (idFront || idBack || addressProof) {
      updates.kycStatus = 'pending';
    }

    // Delete old files if new ones are being uploaded
    if (idFront && user.kycDocuments?.idFront) {
      deleteFile(user.kycDocuments.idFront);
    }
    if (idBack && user.kycDocuments?.idBack) {
      deleteFile(user.kycDocuments.idBack);
    }
    if (addressProof && user.kycDocuments?.addressProof) {
      deleteFile(user.kycDocuments.addressProof);
    }

    // Update user
    Object.keys(updates).forEach((key) => {
      const keys = key.split('.');
      if (keys.length === 2) {
        if (!user[keys[0]]) user[keys[0]] = {};
        user[keys[0]][keys[1]] = updates[key];
      } else {
        user[key] = updates[key];
      }
    });

    await user.save();

    res.json({
      message: 'KYC belgeleri başarıyla yüklendi',
      kycStatus: user.kycStatus,
      documents: {
        idFront: user.kycDocuments?.idFront ? getFileUrl(user.kycDocuments.idFront) : null,
        idBack: user.kycDocuments?.idBack ? getFileUrl(user.kycDocuments.idBack) : null,
        addressProof: user.kycDocuments?.addressProof
          ? getFileUrl(user.kycDocuments.addressProof)
          : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc    Get KYC status and documents
// @route   GET /api/user/kyc
// @access  Private
// -------------------------------------------
exports.getKYC = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select('kycStatus kycDocuments');

    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json({
      kycStatus: user.kycStatus,
      documents: {
        idFront: user.kycDocuments?.idFront ? getFileUrl(user.kycDocuments.idFront) : null,
        idBack: user.kycDocuments?.idBack ? getFileUrl(user.kycDocuments.idBack) : null,
        addressProof: user.kycDocuments?.addressProof
          ? getFileUrl(user.kycDocuments.addressProof)
          : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc    Upload KYC documents (with file upload)
// @route   POST /api/user/kyc-upload
// @access  Private
// -------------------------------------------
exports.uploadKYCDocuments = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'Lütfen en az bir dosya yükleyin' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    const updates = {};
    const files = req.files;

    // Handle ID Front
    if (files.idFront && files.idFront[0]) {
      if (user.kycDocuments?.idFront) {
        deleteFile(user.kycDocuments.idFront);
      }
      updates['kycDocuments.idFront'] = files.idFront[0].filename;
    }

    // Handle ID Back
    if (files.idBack && files.idBack[0]) {
      if (user.kycDocuments?.idBack) {
        deleteFile(user.kycDocuments.idBack);
      }
      updates['kycDocuments.idBack'] = files.idBack[0].filename;
    }

    // Handle Address Proof
    if (files.addressProof && files.addressProof[0]) {
      if (user.kycDocuments?.addressProof) {
        deleteFile(user.kycDocuments.addressProof);
      }
      updates['kycDocuments.addressProof'] = files.addressProof[0].filename;
    }

    // Update KYC status to pending if documents uploaded
    if (Object.keys(updates).length > 0) {
      updates.kycStatus = 'pending';

      // Apply updates
      Object.keys(updates).forEach((key) => {
        const keys = key.split('.');
        if (keys.length === 2) {
          if (!user[keys[0]]) user[keys[0]] = {};
          user[keys[0]][keys[1]] = updates[key];
        } else {
          user[key] = updates[key];
        }
      });

      await user.save();
    }

    res.json({
      message: 'KYC belgeleri başarıyla yüklendi',
      kycStatus: user.kycStatus,
      documents: {
        idFront: user.kycDocuments?.idFront ? getFileUrl(user.kycDocuments.idFront) : null,
        idBack: user.kycDocuments?.idBack ? getFileUrl(user.kycDocuments.idBack) : null,
        addressProof: user.kycDocuments?.addressProof
          ? getFileUrl(user.kycDocuments.addressProof)
          : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc    Get KYC documents for admin review
// @route   GET /api/admin/kyc/:userId
// @access  Private (Admin only)
// -------------------------------------------
exports.getKYCForAdmin = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select(
      'username firstName lastName email kycStatus kycDocuments createdAt'
    );

    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json({
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        registrationDate: user.createdAt,
      },
      kycStatus: user.kycStatus,
      documents: {
        idFront: user.kycDocuments?.idFront ? getFileUrl(user.kycDocuments.idFront) : null,
        idBack: user.kycDocuments?.idBack ? getFileUrl(user.kycDocuments.idBack) : null,
        addressProof: user.kycDocuments?.addressProof
          ? getFileUrl(user.kycDocuments.addressProof)
          : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

