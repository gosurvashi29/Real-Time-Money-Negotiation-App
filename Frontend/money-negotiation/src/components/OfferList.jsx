import React from 'react';
import OfferItem from './OfferItem';

export default function OfferList({ offers, socket, currentUser }) {
  return (
    <div className="container">
      {offers.map(offer => (
        <OfferItem key={offer._id} offer={offer} socket={socket} currentUser={currentUser} />
      ))}
    </div>
  );
}
