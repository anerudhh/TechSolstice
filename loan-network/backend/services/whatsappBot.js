const express = require("express");
const router = express.Router();
const otpUtils = require("../utils/otp");
const { sendOTP } = require("./twilioService");
const userModel = require("../models/userModel");
const loanModel = require("../models/loanModel");

// WhatsApp webhook route
router.post("/whatsapp", async (req, res) => {
    const from = req.body.From || "";
    const message = req.body.Body ? req.body.Body.trim().toLowerCase() : "";
    const phone = from.replace("whatsapp:", "");

    let responseMsg = "Sorry, I didn't understand that. Type HELP for options.";

    if (message === "help") {
        responseMsg = `👋 Welcome to Emergency Loan Network!

Type:
- LOGIN to receive an OTP
- BALANCE to check your trust score
- LOAN <amount> to request a loan`;
    }

    else if (message === "login") {
        const otp = otpUtils.generateOTP();
        otpUtils.storeOTP(phone, otp);
        await sendOTP(phone, otp);
        responseMsg = `✅ OTP sent to ${phone}. Use it to login on the platform.`;
    }

    else if (message.startsWith("loan")) {
        const parts = message.split(" ");
        if (parts.length === 2 && !isNaN(parts[1])) {
            const amount = parseFloat(parts[1]);
            const user = userModel.getUserByPhone(phone);
            if (user) {
                const newLoan = loanModel.createLoan(user.id, null, amount);
                responseMsg = `📤 Loan request of ₹${amount} submitted successfully.\nLoan ID: ${newLoan.id}`;
            } else {
                responseMsg = `⚠️ You are not registered. Please register before requesting a loan.`;
            }
        } else {
            responseMsg = `❌ Invalid loan format. Type: LOAN <amount>`;
        }
    }

    else if (message === "balance") {
        const user = userModel.getUserByPhone(phone);
        if (user) {
            responseMsg = `🧾 Trust Score: ${user.trustScore}`;
        } else {
            responseMsg = `⚠️ You are not registered yet. Please register first.`;
        }
    }

    // Return Twilio-formatted XML response
    res.set("Content-Type", "text/xml");
    res.send(`
        <Response>
            <Message>${responseMsg}</Message>
        </Response>
    `);
});

module.exports = router;
