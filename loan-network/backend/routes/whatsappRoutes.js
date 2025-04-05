const express = require('express');
const router = express.Router();
const { sendWhatsAppMessage, receiveMessage } = require('../controllers/whatsappController');

// @route   POST /api/whatsapp/send
router.post('/send', sendWhatsAppMessage);

// @route   POST /api/whatsapp/receive
router.post('/receive', receiveMessage);

module.exports = router;
