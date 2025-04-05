const express = require('express');
const router = express.Router();
const { sendWhatsAppMessage } = require('../controllers/whatsappController');

// @route   POST /api/whatsapp/send
router.post('/send', sendWhatsAppMessage);

module.exports = router;
