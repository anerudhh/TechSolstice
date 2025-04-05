const loginForm = document.getElementById('loginForm');
const otpForm = document.getElementById('otpForm');
const status = document.getElementById('status');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Login successful! Proceed to OTP verification.');
    loginForm.style.display = 'none';
    otpForm.style.display = 'block';
  } else {
    alert(data.error || 'Login failed');
  }
});

otpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const otp = document.getElementById('otp').value;

  const res = await fetch('/api/users/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('userId', data.userId);
    window.location.href = '/dashboard.html';
  } else {
    status.textContent = data.error || 'Invalid OTP';
  }
});