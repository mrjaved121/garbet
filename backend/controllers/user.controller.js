const User = require('../models/User.model');

// Utility: Filter allowed fields for update
const filterFields = (obj, allowedFields) => {
  const filtered = {};
  Object.keys(obj).forEach(key => {
    if (allowedFields.includes(key)) {
      filtered[key] = obj[key];
    }
  });
  return filtered;
};

// -------------------------------------------
// @desc   Get all users
// @route  GET /api/users
// @access Private (Admin only)
// -------------------------------------------
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password -__v');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private
// -------------------------------------------
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password -__v');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc   Update user (Admin-safe update)
// @route  PUT /api/users/:id
// @access Private (Admin only)
// -------------------------------------------
exports.updateUser = async (req, res) => {
  try {
    // Allowed update fields
    const allowedFields = [
      'firstName',
      'lastName',
      'phone',
      'nationalId',
      'dateOfBirth',
      'iban',
      'bankName',
      'ibanHolderName',
      'status',
      'role',
      'currency',
      'dailyDepositLimit',
      'dailyWithdrawLimit',
      'kycStatus',
      'kycDocuments'
      // intentionally excluding: password, email, username
    ];

    const updates = filterFields(req.body, allowedFields);

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select('-password -__v');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------
// @desc   Delete user
// @route  DELETE /api/users/:id
// @access Private (Admin only)
// -------------------------------------------
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
