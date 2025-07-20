import React, { useState } from 'react';
import JoinPage from './pages/JoinPage';
import NegotiationPage from './pages/NegotiationPage';

export default function App() {
  const [sessionData, setSessionData] = useState(null);
  return sessionData ? (
    <NegotiationPage {...sessionData} />
  ) : (
    <JoinPage onJoin={setSessionData} />
  );
}
