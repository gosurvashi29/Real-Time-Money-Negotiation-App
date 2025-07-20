import React, { useState } from 'react';

export default function JoinPage({ onJoin }) {
  const [username, setUsername] = useState('');
  const [sessionId, setSessionId] = useState('');

  return (
    <div className="container">
      <h2>Join Negotiation</h2>
      <input
        type="text"
        value={username}
        placeholder="Your name"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={sessionId}
        placeholder="Session ID"
        onChange={e => setSessionId(e.target.value)}
      />
      <button onClick={() => onJoin({ username, sessionId })}>
        Join Session
      </button>
    </div>
  );
}
