import React from 'react';
import { acceptOffer, declineOffer } from '../services/socket';

export default function OfferItem({ offer, socket, currentUser }) {
  const isSelf = offer.fromUser === currentUser;

  return (
    <div className="offer-item">
      <div>
        <strong>{offer.fromUser}</strong>: ${offer.amount} — <em>{offer.status}</em>
      </div>
      {!isSelf && offer.status === 'pending' && (
        <div className="offer-actions">
          <button onClick={() => acceptOffer(socket, offer)} className="accept">
            Accept
          </button>
          <button onClick={() => declineOffer(socket, offer)} className="decline">
            Decline
          </button>
        </div>
      )}
    </div>
  );
}
