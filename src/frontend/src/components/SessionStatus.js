import React, { useContext } from 'react';
import { SessionContext } from './SessionContext';

function SessionStatus() {
  const { sessionData } = useContext(SessionContext);

  return (
    <div className='session'>
      {sessionData ? (
        <p>Welcome, {sessionData}!</p>
      ) : (
        <p>Please log in to continue.</p>
        
      )}
    </div>
  );
}

export default SessionStatus;
