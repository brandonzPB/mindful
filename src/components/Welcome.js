import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';
import Login from './Login';

const Welcome = () => {
  const { user, login, dispatch, link, setDest } = useContext(UserContext);

  if (user.accessToken) {
    return (
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  if (link.dest === 'create') {
    return (
      <Route exact path="/">
        <Redirect to="/create" />
      </Route>
    )
  }

  const handleLogin = info => {
    login(user);
  }

  return (
    <div className="welcome-container">
      <div className="welcome-login-container">
        <span className="welcome-text">welcome to mindful.io</span>

        <span className="welcome-text-info">The free website that helps you be more at peace in your daily life with a simple, healthy habit</span>
        
        <div className="welcome-user-container">
          <Login />

          <div className="create-container">
            <span className="login-info">Don't have an account?</span>
            <button id="create-btn" onClick={() => setDest('create')}>Create an Account</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Welcome;
