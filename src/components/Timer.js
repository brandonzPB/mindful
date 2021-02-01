import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Timer = () => {
  const { user, link, setDest } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/timer">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/timer">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  if (link.dest === 'entry') {
    return (
      <Route exact path="/timer">
        <Redirect to="/entry" />
      </Route>
    )
  }

  return (
    <div className="timer-container">
      <div className="btns-container">
        <button className="dest-btns" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
        <button className="dest-btns entry-route-btn" onClick={() => setDest('entry')}>Boost Mindfulness</button>
      </div>
    </div>
  );
}

export default Timer;
