const otps = {}; // Store OTPs temporarily in-memory

// Generate a 6-digit OTP
function generateOTP(phoneNumber) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

  otps[phoneNumber] = { otp, expiry };
  return otp;
}

// Store OTP with expiry
function storeOTP(phoneNumber, otp) {
  otps[phoneNumber] = { otp, expiry: Date.now() + 5 * 60 * 1000 }; // 5 minutes expiry
}

// Verify OTP
function verifyOTP(phoneNumber, inputOtp) {
  const record = otps[phoneNumber];

  if (!record) return false;

  const { otp, expiry } = record;
  const isValid = otp === inputOtp && Date.now() < expiry;

  // If valid, delete OTP after use
  if (isValid) delete otps[phoneNumber];

  return isValid;
}

module.exports = {
  generateOTP,
  verifyOTP,
  storeOTP, // Export the new function
};
