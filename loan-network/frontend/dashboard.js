const path = require('path');
app.use(express.static(path.join(__dirname, 'frontend')));

document.addEventListener('DOMContentLoaded', async () => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    alert('You are not logged in!');
    window.location.href = '/index.html';
    return;
  }

  document.getElementById('userId').textContent = userId;

  // Fetch trust score
  const res = await fetch(`/api/trust/${userId}`);
  const data = await res.json();
  if (res.ok) {
    document.getElementById('trustScore').textContent = data.trustScore;
  } else {
    document.getElementById('trustScore').textContent = 'Error fetching trust score';
  }
});