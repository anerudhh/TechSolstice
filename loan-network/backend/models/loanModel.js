let loans = []; // In-memory loan store

// Create a new loan request
function createLoan({ borrowerId, amount, purpose }) {
  const loan = {
    id: loans.length + 1,
    borrowerId,
    lenderId: null, // initially no lender
    amount,
    purpose,
    status: "pending", // can be "pending", "offered", "accepted", "repaid"
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  loans.push(loan);
  return loan;
}

// Offer to fulfill a loan (assign lender)
function offerLoan(loanId, lenderId) {
  const loan = loans.find(l => l.id === parseInt(loanId));
  if (!loan || loan.status !== "pending") return null;

  loan.lenderId = lenderId;
  loan.status = "offered";
  loan.updatedAt = new Date().toISOString();
  return loan;
}

// Accept the offered loan (final confirmation by borrower)
function acceptLoan(loanId) {
  const loan = loans.find(l => l.id === parseInt(loanId));
  if (!loan || loan.status !== "offered") return null;

  loan.status = "accepted";
  loan.updatedAt = new Date().toISOString();
  return loan;
}

// Mark loan as repaid
function repayLoan(loanId) {
  const loan = loans.find(l => l.id === parseInt(loanId));
  if (!loan || loan.status !== "accepted") return null;

  loan.status = "repaid";
  loan.updatedAt = new Date().toISOString();
  return loan;
}

// Get all loans (for admin or dashboard)
function getAllLoans() {
  return loans;
}

// Get loans by user (borrower or lender)
function getLoansByUser(userId) {
  return loans.filter(
    l => l.borrowerId === userId || l.lenderId === userId
  );
}

module.exports = {
  createLoan,
  offerLoan,
  acceptLoan,
  repayLoan,
  getAllLoans,
  getLoansByUser,
};
