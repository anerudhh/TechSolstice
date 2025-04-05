const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// Use the handlers from loanController
const { requestLoan, getAllLoans } = loanController;

// @route   POST /api/loans/request
router.post('/request', requestLoan);

// @route   GET /api/loans
router.get('/', getAllLoans);

module.exports = router;
