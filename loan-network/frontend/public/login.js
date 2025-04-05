document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginStatus').textContent = data.error || 'Login failed';
    }
});