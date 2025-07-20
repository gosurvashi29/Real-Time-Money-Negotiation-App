import { io } from 'socket.io-client';

let socket;

export function initSocket(username, sessionId, onOffers) {
  socket = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5000');
  socket.emit('join', { sessionId, username });

  socket.on('offerUpdate', offer =>
    onOffers(prev => [...prev, offer])
  );
  socket.on('offerAccepted', data =>
    onOffers(prev =>
      prev.map(o => (o._id === data.offerId ? { ...o, status: 'accepted' } : o))
    )
  );
  socket.on('offerDeclined', data =>
    onOffers(prev =>
      prev.map(o => (o._id === data.offerId ? { ...o, status: 'declined' } : o))
    )
  );

  return socket;
}

export const sendOffer = (sock, offer) =>
  sock.emit('newOffer', offer);
export const acceptOffer = (sock, offer) =>
  sock.emit('acceptOffer', { sessionId: offer.sessionId, offerId: offer._id });
export const declineOffer = (sock, offer) =>
  sock.emit('declineOffer', { sessionId: offer.sessionId, offerId: offer._id });
