import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';

const Terms = () => {
  const { user, login } = useContext(UserContext);

  const acceptTerms = response => {
    const user = {
      name: response.name,
      email: response.email
    };

    login(user);
  }

  const rejectTerms = async () => {
    const userObject = { email: user.tempEmail };

    await userService.remove(userObject);

    localStorage.removeItem('my-user');
    localStorage.removeItem('temp-info');

    return (
      <Route exact path="/terms">
        <Redirect to="/" />
      </Route>
    )
  }

  if (user.accessToken) {
    return (
      <Route exact path="/terms">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  return (
    <div className="terms-container">
      <h1>Terms</h1>
      <span className="login-info">Click the "Login with Facebook" below if you accept these terms and conditions</span>
      <FacebookLogin
        appId="3644277315654948"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={acceptTerms} 
      />
      <span className="login-info">Otherwise, click "Reject Terms"</span>
      <button onClick={rejectTerms} className="reject-btn">Reject Terms</button>
    </div>
  );
}

export default Terms;
