const mongoose = require('mongoose');

const depositRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    adjustedAmount: {
      type: Number,
      default: null, // Admin can adjust this before approval
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'cancelled', 'rejected'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['iban', 'havale', 'eft'],
      default: 'iban',
    },
    financeGroup: {
      type: String,
      default: null, // For filtering in admin
    },
    iban: {
      type: String,
      default: null, // User's IBAN if provided
    },
    bankName: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    adminNotes: {
      type: String,
      default: null, // Admin can add notes when approving/cancelling
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    cancelledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    approvedAt: {
      type: Date,
      default: null,
    },
    cancelledAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
depositRequestSchema.index({ user: 1, createdAt: -1 });
depositRequestSchema.index({ status: 1, createdAt: -1 });
depositRequestSchema.index({ financeGroup: 1 });

module.exports = mongoose.model('DepositRequest', depositRequestSchema);

