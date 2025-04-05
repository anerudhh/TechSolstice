const express = require('express');
const router = express.Router();
const trustScoreController = require('../controllers/trustScoreController.js');

// Route to update a user's trust score
router.post('/update', trustScoreController.updateTrustScore);

// Route to get a user's trust score
router.get('/:userId', trustScoreController.getTrustScore);

module.exports = router;
