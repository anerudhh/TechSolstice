const express = require('express');
const router = express.Router();
const { getAllLoans, requestLoan } = require('../controllers/loanController');

// @route   GET /api/loans
router.get('/', getAllLoans);

// @route   POST /api/loans/request
router.post('/request', requestLoan);

module.exports = router;
