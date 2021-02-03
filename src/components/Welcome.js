import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';

const Welcome = () => {
  const { user, login, dispatch } = useContext(UserContext);

  const [creationDone, setCreationDone] = useState(false);

  if (user.accessToken) {
    return (
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  const responseFacebook = async (response) => {
    const user = {
      name: response.name,
      email: response.email
    };

    const res = await userService.check(user);

    if (res.result === null) {
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

      if (creationDone) return;
      return setCreationDone(!creationDone);
    }

    // user exists
    login(user);
  }

  const createAccount = () => {}

  return (
    <div className="welcome-container">
      {
        creationDone
          ? <Route exact path="/">
            <Redirect to="/terms" />
          </Route>
          : <div className="welcome-login-container">
            <span className="welcome-text">welcome to mindful.io</span>
            <span className="welcome-text-info">The free website that helps you be more at peace in your daily life with a simple, healthy habit</span>
            <div className="welcome-user-container">
              <Login />
              <span className="login-info">Don't have an account?</span>
              <button id="create-btn" onClick={createAccount}>Create an Account</button>
            </div>
          </div>
      }
    </div>
  );
}

export default Welcome;
