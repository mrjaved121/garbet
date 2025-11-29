const AdminLog = require('../models/AdminLog.model');

/**
 * Log admin action
 * @param {Object} options - Logging options
 * @param {String} options.adminId - Admin user ID
 * @param {String} options.action - Action type
 * @param {String} options.targetType - Type of target (user, deposit, etc.)
 * @param {String} options.targetId - ID of target
 * @param {String} options.description - Description of action
 * @param {Object} options.before - State before action
 * @param {Object} options.after - State after action
 * @param {String} options.ipAddress - IP address
 * @param {String} options.userAgent - User agent
 * @param {Object} options.metadata - Additional metadata
 */
const logAdminAction = async (options) => {
  try {
    const {
      adminId,
      action,
      targetType = 'other',
      targetId = null,
      description,
      before = null,
      after = null,
      ipAddress = null,
      userAgent = null,
      metadata = {},
    } = options;

    if (!adminId || !action || !description) {
      console.error('Admin log: Missing required fields', options);
      return;
    }

    await AdminLog.create({
      admin: adminId,
      action,
      targetType,
      targetId,
      description,
      before,
      after,
      ipAddress,
      userAgent,
      metadata,
    });
  } catch (error) {
    console.error('Error logging admin action:', error);
    // Don't throw error - logging should not break the main flow
  }
};

/**
 * Helper to get IP address from request
 */
const getIpAddress = (req) => {
  return (
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown'
  );
};

/**
 * Helper to get user agent from request
 */
const getUserAgent = (req) => {
  return req.headers['user-agent'] || 'unknown';
};

module.exports = {
  logAdminAction,
  getIpAddress,
  getUserAgent,
};

