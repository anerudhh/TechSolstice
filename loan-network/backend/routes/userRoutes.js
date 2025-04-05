const express = require('express');
const router = express.Router();
const { registerUser, loginUser, sendOTP, verifyOTP } = require('../controllers/userController');

// @route   POST /api/users/register
router.post('/register', registerUser);

// @route   POST /api/users/login
router.post('/login', loginUser);

// @route   POST /api/users/send-otp
router.post('/send-otp', sendOTP);

// @route   POST /api/users/verify-otp
router.post('/verify-otp', verifyOTP);

module.exports = router;

