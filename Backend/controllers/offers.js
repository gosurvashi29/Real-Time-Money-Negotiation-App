const Offer = require('../models/Offer');
exports.getOffers = async (req, res) => {
  const offers = await Offer.find({ sessionId: req.params.sessionId }).sort('timestamp');
  res.json(offers);
};
