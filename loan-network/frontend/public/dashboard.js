// Fetch and display trust score
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/trust');
    const data = await res.json();
    document.getElementById('trustScore').textContent = res.ok
      ? data.trustScore
      : 'Error fetching trust score';
  } catch (error) {
    document.getElementById('trustScore').textContent = 'Error connecting to server';
    console.error('Error fetching trust score:', error);
  }
});

// Handle loan request submission
document.getElementById('loanForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = document.getElementById('loanAmount').value;
  const reason = document.getElementById('loanReason').value;

  try {
    const res = await fetch('/api/loans/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, reason }),
    });

    const data = await res.json();
    document.getElementById('loanStatus').textContent = res.ok
      ? 'Loan requested successfully!'
      : data.error || 'Loan request failed';
  } catch (error) {
    document.getElementById('loanStatus').textContent = 'Error connecting to server';
    console.error('Error submitting loan request:', error);
  }
});

// Fetch and display loan requests
document.getElementById('viewLoansButton').addEventListener('click', async () => {
  const loanRequestsList = document.getElementById('loanRequestsList');
  loanRequestsList.innerHTML = ''; // Clear the list before fetching

  try {
    const res = await fetch('/api/loans');
    const data = await res.json();

    if (res.ok && data.loans && data.loans.length > 0) {
      data.loans.forEach((loan) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Amount: ${loan.amount}, Reason: ${loan.reason}`;
        loanRequestsList.appendChild(listItem);
      });
    } else {
      loanRequestsList.innerHTML = '<li>No loan requests found.</li>';
    }
  } catch (error) {
    loanRequestsList.innerHTML = '<li>Error fetching loan requests.</li>';
    console.error('Error fetching loan requests:', error);
  }
});

exports.requestLoan = (req, res) => {
  console.log('Loan request received:', req.body);
  const { amount, reason } = req.body;

  if (!amount || !reason) {
    return res.status(400).json({ error: 'Amount and reason are required' });
  }

  res.status(201).json({ msg: 'Loan request submitted successfully' });
};

exports.getTrustScore = (req, res) => {
  console.log('Fetching trust score...');
  res.status(200).json({ trustScore: 85 });
};