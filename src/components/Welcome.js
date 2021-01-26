import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
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

  return (
    <div className="welcome-container">
      {
        creationDone
          ? <Route exact path="/">
            <Redirect to="/terms" />
          </Route>
          : <div className="login-container">
            <div className="login-container">
              <FacebookLogin
                appId="3644277315654948"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook} 
              />
            </div>
          </div>
      }
    </div>
  );
}

export default Welcome;