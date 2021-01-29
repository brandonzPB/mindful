import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const LogoutButton = () => {
  const { user, logout } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <div className="empty"></div>
    )
  }

  return (
    <div className="logout-btn-container">
      <button onClick={logout} id="logout-btn">Logout</button>
    </div>
  );
}

export default LogoutButton;
