const User = require('../models/User.model');

// Middleware to check if user is admin
const adminMiddleware = async (req, res, next) => {
  try {
    // First check if user is authenticated (authMiddleware should run before this)
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Get user from database to check role
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user has admin role
    const adminRoles = ['admin', 'super_admin', 'operator'];
    if (!adminRoles.includes(user.role)) {
      return res.status(403).json({ message: 'Access denied. Admin role required.' });
    }

    // Attach full user object to request
    req.adminUser = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = adminMiddleware;

