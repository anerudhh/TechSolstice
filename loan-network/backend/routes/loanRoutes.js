const express = require('express');
const router = express.Router();
const { requestLoan, getAllLoans } = require('../controllers/loanController');

// @route   POST /api/loans/request
router.post('/request', requestLoan);

// @route   GET /api/loans
router.get('/', getAllLoans);

module.exports = router;
