const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

// Utility to send SMS
async function sendSMS(to, body) {
    try {
        const message = await client.messages.create({
            body,
            from: twilioPhone,
            to,
        });
        console.log("SMS sent:", message.sid);
        return message.sid;
    } catch (err) {
        console.error("Error sending SMS:", err.message);
        return null;
    }
}

// Send OTP
async function sendOTP(phone, otp) {
    const message = `Your OTP for login is ${otp}. Use this to access your Emergency Loan account.`;
    return await sendSMS(phone, message);
}

// Notify Lender about loan request
async function notifyLender(phone, borrowerName, amount) {
    const message = `${borrowerName} has requested a loan of ₹${amount}. Please check your dashboard.`;
    return await sendSMS(phone, message);
}

module.exports = {
    sendSMS,
    sendOTP,
    notifyLender
};
