const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ledgerPath = path.join(__dirname, '../data/ledger.json');

// Load existing ledger or initialize if missing
function loadLedger() {
  if (!fs.existsSync(ledgerPath)) {
    fs.writeFileSync(ledgerPath, JSON.stringify([]));
  }
  const data = fs.readFileSync(ledgerPath);
  return JSON.parse(data);
}

function saveLedger(ledger) {
  fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2));
}

function calculateHash(data) {
  return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
}

// GET /api/ledger
const getLedger = (req, res) => {
  const ledger = loadLedger();
  res.json(ledger);
};

// POST /api/ledger/add
const addLedgerEntry = (req, res) => {
  const { type, fromUserId, toUserId, amount } = req.body;

  if (!type || !fromUserId || !toUserId || !amount) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const ledger = loadLedger();
  const prevBlock = ledger[ledger.length - 1];
  const prevHash = prevBlock ? prevBlock.hash : '0';

  const newBlock = {
    id: ledger.length + 1,
    timestamp: new Date().toISOString(),
    data: { type, fromUserId, toUserId, amount },
    previousHash: prevHash
  };

  newBlock.hash = calculateHash(newBlock);

  ledger.push(newBlock);
  saveLedger(ledger);

  res.status(201).json({ message: 'Ledger entry added', block: newBlock });
};

module.exports = {
  getLedger,
  addLedgerEntry
};
