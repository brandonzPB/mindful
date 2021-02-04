import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import chimeSrc from '../audio/chime.mp3';
const chimeSound = new Audio(chimeSrc);

const Timer = () => {
  const { user, link, setDest } = useContext(UserContext);

  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    countdown: false,
  });

  useEffect(() => {
    chimeSound.load();
      chimeSound.currentTime = 0;

    if (!timer.countdown) return;

    const meditation = setTimeout(() => {
      if (timer.seconds === 0) {

        if (timer.minutes === 0) {

          if (timer.hours === 0) {
            chimeSound.play();
          } else {
            setTimer({
              ...timer,
              seconds: 59,
              minutes: 59,
              hours: timer.hours - 1
            });
          }

        } else {
          setTimer({
            ...timer,
            seconds: 59,
            minutes: timer.minutes - 1
          });
        }
      } else {
        setTimer({
          ...timer,
          seconds: timer.seconds - 1
        });
      }
    }, 1000);

    return () => clearTimeout(meditation);
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

  const handleSubmit = event => {
    event.preventDefault();

    if (timer.seconds > 59) {
      setTimer({
        ...timer,
        seconds: 59
      });
    } else if (timer.minutes > 59) {
      setTimer({
        ...timer,
        minutes: 59
      });
    } else if (timer.hours > 3) {
      setTimer({
        ...timer,
        hours: 3
      });
    }

    setTimer({
      ...timer,
      countdown: true
    });
  }

  const handleChange = event => {
    const { name, value } = event.target;

    if (value % 2 !== 0 && value % 2 !== 1) return;

    setTimer({
      ...timer,
      [name]: value
    });
  }

  const pauseTimer = () => {
    setTimer({
      ...timer,
      countdown: false
    });
  }

  const resetTimer = () => {
    setTimer({
      ...timer,
      seconds: 0,
      minutes: 0,
      hours: 0,
      countdown: false
    });
  }

  return (
    <div className="timer-container">
      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
        <button className="dest-btns entry-route-btn" onClick={() => setDest('entry')}>Boost Mindfulness</button>
      </div>

      <div className="timer-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="hours"
            value={timer.hours}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">h</span>

          <input 
            type="text"
            name="minutes"
            value={timer.minutes}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">m</span>

          <input 
            type="text"
            name="seconds"
            value={timer.seconds}
            onChange={handleChange}
            placeholder="00"
            className="timer-input"
          />
          <span className="timer-char">s</span>

          <button id="start-btn">Start Timer</button>
        </form>
        <div className="timer-btns-container">
          <button onClick={pauseTimer} id="pause-btn">Pause Timer</button>
          <button onClick={resetTimer} id="reset-btn">Reset Timer</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
