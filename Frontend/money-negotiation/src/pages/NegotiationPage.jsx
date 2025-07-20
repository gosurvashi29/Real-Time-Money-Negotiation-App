import React, { useState } from 'react';
import { initSocket, sendOffer } from '../services/socket';
import OfferList from '../components/OfferList';

export default function NegotiationPage({ username, sessionId }) {
  const [offers, setOffers] = useState([]);
  const socket = initSocket(username, sessionId, setOffers);

  const handleNewOffer = () => {
    const amount = parseInt(prompt('Enter your offer amount'), 10);
    if (!isNaN(amount)) {
      sendOffer(socket, { sessionId, fromUser: username, amount });
    }
  };

  return (
    <div className="container">
      <h2>Session: {sessionId}</h2>
      <OfferList offers={offers} socket={socket} currentUser={username} />
      <button onClick={handleNewOffer}>Make Offer</button>
    </div>
  );
}
