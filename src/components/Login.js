import React, { useState, useContext } from 'react';
import userService from '../services/userService';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState({
    status: false,
    ref: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;

    return setInfo({
      ...info,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // reset error state to blank
    setErr({
      ...err,
      status: false,
      ref: ''
    });

    // check if name and email are empty
    if (!info.name.trim() && !info.email.trim()) {
      return false;
    }

    const userObj = { password: info.password };

    if (info.name.trim() === '' && info.email.trim() === '') {
      // both name and email are empty (somehow passed first check)
      return false;

    } else if (info.name.trim() === '') {
      // only name is empty
      userObj.type = 'email';
      userObj.email = info.email;

    } else if (info.email.trim() === '') {
      // only email is empty
      userObj.type = 'name'
      userObj.name = info.name;
    }

    // check if user exists in database
    const res = await userService.check(userObj);

    if (res.result === 'User is free') {
      return setErr({
        ...err,
        status: true
      });
    }

    // checks if login is successful
    const loginRes = await userService.login(userObj);

    if (loginRes.result === 'Password incorrect') {
      return setErr({
        ...err,
        ref: 'password'
      });
    } else if (loginRes.result === 'User not found') {
      return setErr({
        ...err,
        status: true
      });
    }

    login(userObj);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-input-label">Username:</label>
        <input 
          style={{ border: err.status ? '2px solid red' : 'none' }}
          type="name"
          name="name"
          value={info.name}
          onChange={handleChange}
          className="login-input"
        />

        <label className="login-input-label">or Email:</label>
        <input 
          style={{ border: err.status ? '2px solid red': 'none' }}
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          className="login-input"
        />

        <label className="login-input-label">Password:</label>
        <input 
          style={{ border: err.ref === 'password' ? '2px solid red' : 'none' }}
          type="password"
          name="password"
          value={info.password}
          onChange={handleChange}
          className="login-input"
        />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
