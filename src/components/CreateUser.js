import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';

const CreateUser = () => {
  const { createUser } = useContext(UserContext);

  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    created: false, // redirects to privacy policy upon creation
  });

  const [err, setErr] = useState({ ref: '' });

  const handleChange = event => {
    const { name, value } = event.target;

    setAccount({
      ...account,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // reset error state to blank
    setErr({
      ...err,
      ref: ''
    });

    // at least one password is left blank
    if (!account.password.trim() || !account.confirmPassword.trim()) {
      return setErr({
        ...err,
        ref: 'password'
      });
    } else if (!account.name.trim()) {
      return setErr({
        ...err,
        ref: 'name'
      });
    } else if (!account.email.trim()) {
      return setErr({
        ...err,
        ref: 'email'
      });
    }

    // password inputs don't match
    if (account.password !== account.confirmPassword) {
      return setErr({
        ...err,
        ref: 'password'
      });
    }

    const userObj = {
      name: account.name,
      email: account.email,
      password: account.password
    };

    // check if user already exists
    const response = await userService.check(userObj);

    if (response.result === 'User is free') {

      await createUser(userObj);

      return setAccount({
        ...account,
        created: true
      });

    } else if (response.result === 'Name exists') {
      return setErr({
        ...err,
        ref: 'name'
      });

    } else if (response.result === 'Email exists') {
      return setErr({
        ...err,
        ref: 'email'
      });
    }
  }

  return (
    <div className="create-user-container">
      {
        account.created ?
          <Route exact path="/create">
            <Redirect to="/terms" />
          </Route>
          : <form onSubmit={handleSubmit}>
            <label className="create-input-label">Name:</label>
            <input 
              style={{ border: err.ref === 'name' ? '2px solid red' : 'none' }}
              type="text"
              name="name"
              value={account.name}
              onChange={handleChange}
              className="create-input"
            />

            <label className="create-input-label">Email:</label>
            <input 
              style={{ border: err.ref === 'email' ? '2px solid red' : 'none' }}
              type="email"
              minLength={3}
              name="email"
              value={account.email}
              onChange={handleChange}
              className="create-input"
            />

            <label className="create-input-label">Password:</label>
            <input
              style={{ border: err.ref === 'password' ? '2px solid red' : 'none' }} 
              type="password"
              name="password"
              value={account.password}
              onChange={handleChange}
              className="create-input"
            />

            <label className="create-input-label">Confirm Password:</label>
            <input 
              style={{ border: err.ref === 'password' ? '2px solid red' : 'none' }}
              type="password"
              minLength={5}
              maxLength={31}
              name="confirmPassword"
              value={account.confirmPassword}
              onChange={handleChange}
              className="create-input"
            />
            <button className="create-user-btn">Create User</button>
          </form>
      }
    </div>
  );
}

export default CreateUser;
