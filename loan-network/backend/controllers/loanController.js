const { loadLoans, saveLoans } = require('../config/db'); // Corrected path

exports.requestLoan = (req, res) => {
  const { userId, amount, reason } = req.body;
  let loans = loadLoans();

  const newLoan = {
    id: Date.now(),
    userId,
    amount,
    reason,
    status: 'pending',
    timestamp: new Date()
  };
  loans.push(newLoan);
  saveLoans(loans);
  res.status(201).json({ msg: 'Loan request submitted', loan: newLoan });
};

exports.getAllLoans = (req, res) => {
  const loans = loadLoans();
  res.json(loans);
};

exports.offerLoan = (req, res) => {
  res.status(501).json({ msg: 'offerLoan not implemented' });
};

exports.repayLoan = (req, res) => {
  res.status(501).json({ msg: 'repayLoan not implemented' });
};
