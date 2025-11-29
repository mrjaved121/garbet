const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const { sendWelcomeEmail } = require('../utils/emailService');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      status: user.status
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

// -------------------------------------------
// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
// -------------------------------------------
exports.register = async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
      nationalId,
      dateOfBirth,
      currency,
      is18Plus,
      termsAccepted,
      kvkkAccepted,
      iban,
      bankName,
      ibanHolderName
    } = req.body;

    // Required field checks
    if (!username || !firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!is18Plus || !termsAccepted || !kvkkAccepted) {
      return res.status(400).json({ message: 'Legal terms must be accepted' });
    }

    // Check email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Email or username already in use'
      });
    }

    // Create user
    const user = await User.create({
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
      nationalId,
      dateOfBirth,
      currency,
      is18Plus,
      termsAccepted,
      kvkkAccepted,
      iban,
      bankName,
      ibanHolderName,
      role: 'user',
      status: 'active'
    });

    // Send welcome email (async, don't wait)
    sendWelcomeEmail(user).catch((err) => {
      console.error('Welcome email error:', err);
    });

    return res.status(201).json({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      currency: user.currency,
      balance: user.balance,
      bonusBalance: user.bonusBalance,
      token: generateToken(user)
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
// -------------------------------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if user is banned or self-excluded
    if (user.status === 'banned') {
      return res.status(403).json({ message: 'Account banned' });
    }
    if (user.status === 'self_excluded') {
      return res.status(403).json({ message: 'Self exclusion active' });
    }

    return res.json({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      balance: user.balance,
      bonusBalance: user.bonusBalance,
      role: user.role,
      status: user.status,
      token: generateToken(user)
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc    Get logged-in user
// @route   GET /api/auth/me
// @access  Private
// -------------------------------------------
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      '-password -__v'
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
