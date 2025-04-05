const express = require('express');
const router = express.Router();
const {
  requestLoan,
  offerLoan,
  getLoans,
  repayLoan
} = require('./controllers/loanController');

// @route   POST /api/loans/request
router.post('/request', requestLoan);

// @route   POST /api/loans/offer
router.post('/offer', offerLoan);

// @route   GET /api/loans
router.get('/', getLoans);

// @route   POST /api/loans/repay
router.post('/repay', repayLoan);

module.exports = router;
