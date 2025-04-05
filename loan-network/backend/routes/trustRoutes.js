const express = require('express');
const router = express.Router();
const {
  getTrustScore,
  updateTrustScore
} = require('../controllers/trustController');

// @route   GET /api/trust/score/:userId
router.get('/score/:userId', getTrustScore);

// @route   POST /api/trust/score/:userId
router.post('/score/:userId', updateTrustScore);

module.exports = router;
