const express = require('express');
const { getOffers } = require('../controllers/offers');
const router = express.Router();
router.get('/:sessionId', getOffers);
module.exports = router;
