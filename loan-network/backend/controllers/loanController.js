const { loadLoans, saveLoans } = require('./config/db');

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
