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