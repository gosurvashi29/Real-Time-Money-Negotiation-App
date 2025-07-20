const mongoose = require('mongoose');
const offerSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  fromUser: String,
  amount: Number,
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Offer', offerSchema);
