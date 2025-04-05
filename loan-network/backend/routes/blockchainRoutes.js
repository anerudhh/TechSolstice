const express = require('express');
const router = express.Router();
const {
  getLedger,
  addLedgerEntry
} = require('./controllers/blockchainController');

// @route   GET /api/ledger
router.get('/', getLedger);

// @route   POST /api/ledger/add
router.post('/add', addLedgerEntry);

module.exports = router;
