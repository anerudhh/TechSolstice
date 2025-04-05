const { loadUsers, saveUsers } = require('../config/db');

let otpStore = {}; // in-memory OTP store

exports.registerUser = (req, res) => {
  const { name, phone } = req.body;
  let users = loadUsers();
  const exists = users.find(u => u.phone === phone);
  if (exists) return res.status(400).json({ msg: 'User already exists' });

  const newUser = { id: Date.now(), name, phone, trustScore: 50 };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json({ msg: 'Registered successfully', user: newUser });
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
