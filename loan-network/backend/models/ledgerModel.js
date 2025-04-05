let ledger = []; // In-memory ledger store

// Add an entry to the ledger
function addLedgerEntry({ userId, trustScore, action, timestamp }) {
  const entry = {
    id: ledger.length + 1,
    userId,
    trustScore,
    action,
    timestamp,
  };

  ledger.push(entry);
  return entry;
}

// Get the entire ledger
function getLedger() {
  return ledger;
}

// Clear ledger (for reset/testing purposes)
function clearLedger() {
  ledger = [];
}

module.exports = {
  addLedgerEntry,
  getLedger,
  clearLedger,
};
