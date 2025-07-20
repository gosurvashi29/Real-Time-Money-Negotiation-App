const Offer = require('../models/Offer');
module.exports = (io, socket) => {
  socket.on('join', ({ sessionId, username }) => {
    socket.join(sessionId);
  });

  socket.on('newOffer', async data => {
    const offer = await Offer.create(data);
    io.to(data.sessionId).emit('offerUpdate', offer);
  });

  socket.on('acceptOffer', async data => {
    await Offer.findByIdAndUpdate(data.offerId, { status: 'accepted' });
    io.to(data.sessionId).emit('offerAccepted', data);
  });

  socket.on('declineOffer', async data => {
    await Offer.findByIdAndUpdate(data.offerId, { status: 'declined' });
    io.to(data.sessionId).emit('offerDeclined', data);
  });
};
