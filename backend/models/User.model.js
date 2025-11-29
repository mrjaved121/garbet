// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       match: [
//         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         'Please add a valid email',
//       ],
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//       minlength: 6,
//       select: false,
//     },
//     balance: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },
//     currency: {
//       type: String,
//       default: 'USD',
//       enum: ['USD', 'EUR', 'TRY'],
//     },
//     status: {
//       type: String,
//       enum: ['active', 'suspended', 'banned'],
//       default: 'active',
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//     totalDeposits: {
//       type: Number,
//       default: 0,
//     },
//     totalWithdrawals: {
//       type: Number,
//       default: 0,
//     },
//     totalWinnings: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Encrypt password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // Compare password method
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    // Authentication
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    // Identity
    username: { type: String, required: true, unique: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    nationalId: { type: String, default: null },
    dateOfBirth: { type: Date },

    // Legal confirmations
    is18Plus: { type: Boolean, required: true },
    termsAccepted: { type: Boolean, required: true },
    kvkkAccepted: { type: Boolean, required: true },

    // Wallet
    balance: { type: Number, default: 0, min: 0 },
    bonusBalance: { type: Number, default: 0, min: 0 },
    currency: { type: String, enum: ['USD', 'EUR', 'TRY'], default: 'TRY' },

    // Banking
    iban: { type: String, default: null },
    bankName: { type: String, default: null },
    ibanHolderName: { type: String, default: null },

    // KYC
    kycStatus: {
      type: String,
      enum: ['not_submitted', 'pending', 'verified', 'rejected'],
      default: 'not_submitted',
    },
    kycDocuments: {
      idFront: String,
      idBack: String,
      addressProof: String,
    },

    // Status
    status: {
      type: String,
      enum: ['active', 'suspended', 'banned', 'self_excluded'],
      default: 'active',
    },

    // Admin Role
    role: {
      type: String,
      enum: ['user', 'admin', 'super_admin', 'operator'],
      default: 'user',
    },

    // Stats
    totalDeposits: { type: Number, default: 0 },
    totalWithdrawals: { type: Number, default: 0 },
    totalWinnings: { type: Number, default: 0 },

    // Limits
    dailyDepositLimit: { type: Number, default: null },
    dailyWithdrawLimit: { type: Number, default: null },
  },
  { timestamps: true }
);

// Hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

module.exports = mongoose.model('User', userSchema);
