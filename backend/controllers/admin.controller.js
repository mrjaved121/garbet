const DepositRequest = require('../models/DepositRequest.model');
const WithdrawalRequest = require('../models/WithdrawalRequest.model');
const AdminLog = require('../models/AdminLog.model');
const User = require('../models/User.model');
const Transaction = require('../models/Transaction.model');
const { createDepositBonus } = require('./bonus.controller');
const { logAdminAction, getIpAddress, getUserAgent } = require('../utils/adminLogger');
const mongoose = require('mongoose');

// NOTE: This file was reconstructed. If functions are missing, restore from version control.
// The following functions should exist: getDepositPool, approveDeposit, cancelDeposit,
// getDepositRequestById, getWithdrawalPool, approveWithdrawal, rejectWithdrawal, getWithdrawalRequestById

// -------------------------------------------
// @desc    Get admin logs
// @route   GET /api/admin/logs
// @access  Private (Admin only)
// -------------------------------------------
exports.getAdminLogs = async (req, res) => {
  try {
    const {
      adminId,
      action,
      targetType,
      startDate,
      endDate,
      limit = 50,
      page = 1,
    } = req.query;

    const query = {};

    // Admin filter
    if (adminId) {
      query.admin = adminId;
    }

    // Action filter
    if (action) {
      query.action = action;
    }

    // Target type filter
    if (targetType) {
      query.targetType = targetType;
    }

    // Date range filter
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) {
        query.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        query.createdAt.$lte = new Date(endDate);
      }
    }

    const logs = await AdminLog.find(query)
      .populate('admin', 'username firstName lastName email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await AdminLog.countDocuments(query);

    res.json({
      logs,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
