import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import userService from '../services/userService';

const Terms = () => {
  const { user, login } = useContext(UserContext);

  const [rejected, setRejected] = useState(false);

  const acceptTerms = response => {
    const user = {
      name: response.name,
      email: response.email
    };

    login(user);
  }

  const rejectTerms = async () => {
    const userObject = { email: user.email };

    await userService.remove(userObject, user.createToken);

    localStorage.removeItem('my-user');
    localStorage.removeItem('temp-info');

    if (rejected) return;
    return setRejected(!rejected);
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
      {
        rejected
          ? <Route exact path="/terms">
            <Redirect to="/" />
          </Route>
          : <div className="terms-inner-container">
            <div className="terms-text-container">
              <span className="terms-header">Our Terms, Your Privacy</span>
              <span className="terms-text">We only collect the name and email you provide to Facebook. </span>
              <span className="terms-text">We don't collect your responses to questions, nor do we track you in any way. </span>
              <span className="terms-text">The sole purpose of this app is to provide a resource to you that can help you become a more mindful and peaceful person. </span>
            </div>
            <span className="terms-text">Click the "Accept" below if you accept these terms and conditions</span>
            <span className="terms-text">Otherwise, click "Reject Terms"</span>
            <button onClick={rejectTerms} className="reject-btn">Reject Terms</button>
          </div>
      }
    </div>
  );
}

export default Terms;
