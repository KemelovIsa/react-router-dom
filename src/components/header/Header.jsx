import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isRegistered');
    navigate('/login');
  };

  return (
    <div>
      <h1>Your App</h1>
      {localStorage.getItem('isRegistered') === 'true' && (
        <button onClick={handleLogout}>Выйти</button>
      )}
    </div>
  );
};

export default Header;
