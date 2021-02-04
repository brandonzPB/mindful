import React, { useState, useContext } from 'react';
import userService from '../services/userService';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const { user, dispatch, login } = useContext(UserContext);

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

  const handleSubmit = event => {
    event.preventDefault();

    if (!info.name.trim() && !info.email.trim()) {
      return false;
    }

    const userObj = {
      name: info.name,
      email: info.email,
      password: info.password
    };

    const res = userService.check(userObj);

    if (res === null) {
      // user doesn't exist

      return setErr({
        ...err,
        status: true
      });
    } else if (res.result === 'Password error') {
      return setErr({
        ...err,
        ref: 'password'
      });
    } else {
      // user exists
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input 
          style={{ border: err.status ? '2px solid red' : 'none' }}
          type="name"
          name="name"
          value={info.name}
          onChange={handleChange}
          className="login-input"
        />
        <input 
          style={{ border: err.status ? '2px solid red': 'none' }}
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          className="login-input"
        />
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
