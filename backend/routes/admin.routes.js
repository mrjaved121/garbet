const express = require('express');
const router = express.Router();
const {
  getDepositPool,
  approveDeposit,
  cancelDeposit,
  getDepositRequestById,
  getWithdrawalPool,
  approveWithdrawal,
  rejectWithdrawal,
  getWithdrawalRequestById,
  getAdminLogs,
} = require('../controllers/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');

// All routes require authentication and admin role
router.use(authMiddleware);
router.use(adminMiddleware);

// Deposit Pool (Yatırım Havuzu)
router.get('/deposit-pool', getDepositPool);
router.get('/deposit-pool/:id', getDepositRequestById);
router.post('/deposit-pool/:id/approve', approveDeposit);
router.post('/deposit-pool/:id/cancel', cancelDeposit);

// Withdrawal Pool (Çekim Havuzu)
router.get('/withdrawal-pool', getWithdrawalPool);
router.get('/withdrawal-pool/:id', getWithdrawalRequestById);
router.post('/withdrawal-pool/:id/approve', approveWithdrawal);
router.post('/withdrawal-pool/:id/reject', rejectWithdrawal);

// Admin Logs
router.get('/logs', getAdminLogs);

module.exports = router;

