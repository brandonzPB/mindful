import React, { useContext } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Timer = () => {
  const { user } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/timer">
        <Redirect to="/" />
      </Route>
    )
  }

  return (
    <div className="timer-container">
      <Link to="/dashboard">
        <p>Return to Dashboard</p>
      </Link>
    </div>
  );
}

export default Timer;
