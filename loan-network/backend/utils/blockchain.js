const blockchain = require('../models/blockchain');

// Add a new ledger entry
function addLedgerEntry({ userId, trustScore, action }) {
  const timestamp = Date.now();

  blockchain.addBlock({
    userId,
    trustScore,
    action,
    timestamp,
  });

  return blockchain.getLatestBlock();
}

// Get the full ledger (chain)
function getLedger() {
  return blockchain.chain;
}

module.exports = {
  addLedgerEntry,
  getLedger,
};
