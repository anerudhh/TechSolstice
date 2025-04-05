const { loadUsers, saveUsers } = require('../config/db');

let otpStore = {}; // in-memory OTP store

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Registering user: ${name}, ${email}`);
  res.status(201).json({ msg: 'User registered successfully' });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log(`Logging in user: ${email}`);
  res.status(200).json({ msg: 'User logged in successfully' });
};

exports.sendOTP = (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[phone] = otp;
  console.log(`OTP for ${phone}: ${otp}`); // Simulate SMS
  res.json({ msg: 'OTP sent (check console)' });
};

exports.verifyOTP = (req, res) => {
  const { phone, otp } = req.body;
  if (parseInt(otp) === otpStore[phone]) {
    delete otpStore[phone];
    res.json({ msg: 'OTP verified. Login success' });
  } else {
    res.status(400).json({ msg: 'Invalid OTP' });
  }
};
