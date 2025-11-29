const express = require('express');
const router = express.Router();
const {
  submitKYC,
  getKYC,
  uploadKYCDocuments,
  getKYCForAdmin,
} = require('../controllers/kyc.controller');
const { uploadMultiple } = require('../utils/upload');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');

// User routes
router.use(authMiddleware);
router.get('/', getKYC);
router.post('/submit', submitKYC);
router.post(
  '/upload',
  uploadMultiple('idFront', 1),
  uploadMultiple('idBack', 1),
  uploadMultiple('addressProof', 1),
  uploadKYCDocuments
);

// Admin routes
router.get('/:userId', adminMiddleware, getKYCForAdmin);

module.exports = router;

