import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Timer = () => {
  const { user, link, setDest } = useContext(UserContext);

  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    interval: 0,
  });

  useEffect(() => {
  }, [timer]);

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

  const handleTimer = event => {
    event.preventDefault();
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setTimer({
      ...timer,
      [name]: value
    });
  }

  const changeTextToInput = () => {

  }

  return (
    <div className="timer-container">
      <div className="btns-container">
        <button className="dest-btns" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
        <button className="dest-btns entry-route-btn" onClick={() => setDest('entry')}>Boost Mindfulness</button>
      </div>

      <div className="timer-form">
        <form onSubmit={handleTimer}>
          <span className="timer-input-text" onClick={changeTextToInput}>00</span>
          <input 
            type="number"
            name="hours"
            value={timer.hours}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">h</span>

          <input 
            type="number"
            name="minutes"
            value={timer.minutes}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">m</span>

          <input 
            type="number"
            name="seconds"
            value={timer.seconds}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">s</span>

          <button className="set-time-btn">Set Timer</button>
        </form>
      </div>
    </div>
  );
}

export default Timer;
