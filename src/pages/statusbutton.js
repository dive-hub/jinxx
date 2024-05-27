// src/StatusButton.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const StatusButton = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <button
      onClick={logout}
      style={{
        backgroundColor: isLoggedIn ? 'green' : 'yellow',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isLoggedIn ? 'Logout' : 'Logged Out'}
    </button>
  );
};

export default StatusButton;
