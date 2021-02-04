import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';

const CreateUser = () => {
  const { user, dispatch } = useContext(UserContext);

  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (account.password !== account.confirmPassword) {
      return setErr({
        ...err,
        ref: 'password'
      });
    }

    const userObj = {
      name: account.name,
      email: account.email
    };

    const res = await userService.check(userObj);

    if (res === null) {
      // user doesn't exist
      
      await userService.create(user)
        .then(res => {
          console.log('res', res);

          dispatch({ type: 'CREATE_USER', user: {
            email: res.email,
            createToken: res.createToken
          }});

          return res;
        })
        .catch(err => console.error(err));
    } else {
      // user exists

      if (res.result === 'Name error') {
        return setErr({
          ...err,
          ref: 'name'
        });
      } else if (res.result === 'Email error') {
        return setErr({
          ...err,
          ref: 'email'
        });
      }
    }
  }

  return (
    <div className="create-user-container">
      <form onSubmit={handleSubmit}>
        <input 
          style={{ border: err.ref === 'name' ? '2px solid red' : 'none' }}
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="create-input"
        />
        <input 
          style={{ border: err.ref === 'email' ? '2px solid red' : 'none' }}
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="create-input"
        />
        <input
          style={{ border: err.ref === 'password' ? '2px solid red' : 'none' }} 
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="create-input"
        />
        <input 
          style={{ border: err.ref === 'password' ? '2px solid red' : 'none' }}
          type="password"
          name="confirmPassword"
          value={user.password}
          onChange={handleChange}
          className="create-input"
        />
        <button className="create-user-btn">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
