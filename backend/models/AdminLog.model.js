const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: [
        // Deposit actions
        'deposit_approved',
        'deposit_cancelled',
        'deposit_amount_adjusted',
        // Withdrawal actions
        'withdrawal_approved',
        'withdrawal_rejected',
        'withdrawal_marked_paid',
        // User actions
        'user_status_changed',
        'user_balance_adjusted',
        'user_limits_updated',
        'user_kyc_updated',
        // Match actions
        'match_created',
        'match_updated',
        'match_result_entered',
        // Bonus actions
        'bonus_settings_changed',
        'bonus_manually_granted',
        // Settings actions
        'global_settings_updated',
        'limits_updated',
        // Other
        'manual_transaction',
        'other',
      ],
    },
    targetType: {
      type: String,
      enum: ['user', 'deposit', 'withdrawal', 'match', 'bet', 'bonus', 'settings', 'other'],
      default: 'other',
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
    before: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    after: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
adminLogSchema.index({ admin: 1, createdAt: -1 });
adminLogSchema.index({ action: 1, createdAt: -1 });
adminLogSchema.index({ targetType: 1, targetId: 1 });
adminLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('AdminLog', adminLogSchema);

