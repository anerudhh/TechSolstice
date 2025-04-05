document.addEventListener('DOMContentLoaded', async () => {
    // Fetch trust score
    const res = await fetch('/api/trust');
    const data = await res.json();
    document.getElementById('trustScore').textContent = res.ok
        ? data.trustScore
        : 'Error fetching trust score';
});

document.getElementById('loanForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('loanAmount').value;
    const reason = document.getElementById('loanReason').value;

    const res = await fetch('/api/loans/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, reason }),
    });

    const data = await res.json();
    document.getElementById('loanStatus').textContent = res.ok
        ? 'Loan requested successfully!'
        : data.error || 'Loan request failed';
});