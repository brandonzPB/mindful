import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Settings = () => {
  const { user, removeUser, setDest, link } = useContext(UserContext);

  const [info, setInfo] = useState({
    password: '',
    confirmPassword: ''
  });

  const [err, setErr] = useState({ state: false });

  if (!user.accessToken) {
    return (
      <Route exact path="/settings">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/settings">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setInfo({
      ...info,
      [name]: value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    setErr({
      ...err,
      state: false
    });

    if (!info.password.trim() || !info.confirmPassword.trim()) {
      return setErr({
        ...err,
        state: true
      });
    }

    if (info.password !== info.confirmPassword) {
      return setErr({
        ...err,
        state: true
      });
    }

    removeUser();
  }

  return (
    <div className="settings-container">
      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
      </div>

      <div id="text-container">
        <span className="delete-text">The benefits of using mindful.io don't depend on how long you've been using a single account. </span>
        <span className="delete-text">If you wish to change your name or email, you can simply delete your account and create a new one. </span>
        <span className="delete-text">Why? We want to fulfill our promise to you and not collect any more information than what you provide us. </span>
        <span className="delete-text">Unlike other social media platforms, once you change your email with us (by creating a new account), it's gone for good. It's that simple.</span>
      </div>

      <form onSubmit={handleSubmit} className="delete-form">
        <label className="delete-label">Enter password:</label>
        <input 
          style={{ border: err.state ? '2px solid red' : 'none' }}
          type="password"
          name="password"
          value={info.password}
          onChange={handleChange}
          className="delete-input"
        />

        <label className="delete-label">Confirm password:</label>
        <input 
          style={{ border: err.state ? '2px solid red' : 'none' }}
          type="password"
          name="confirmPassword"
          value={info.confirmPassword}
          onChange={handleChange}
          className="delete-input"
        />

        <button id="delete-user-btn">Delete Account</button>
      </form>
    </div>
  );
}

export default Settings;
