import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const [infoState, setInfoState] = useState({ open: false });

  if (!user.accessToken) {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/" />
      </Route>
    )
  }

  const showInfo = () => {
    setInfoState({
      ...infoState,
      open: true
    });
  }

  const hideInfo = () => {
    setInfoState({
      ...infoState,
      open: false
    });
  }

  return (
    <div className="dashboard-container">
      <h1>
        {
          user.entries > 0
            ? `Welcome back, ${user.firstName} :)`
            : `Welcome ${user.firstName} :)`
        }
      </h1>
      <h1>
        {
          user.entries > 0
            ? `You've completed ${user.entries} mindfulness entries so far! Keep up the good work, and you'll see increased mindfulness in your daily life`
            : ``
        }
      </h1>

      {
        infoState.open
          ? <div className="info-container">
            <button className="info-btn" onClick={hideInfo}>Hide Info</button>
            <span className="dashboard-text">
              <a href="https://www.mindful.org/meditation/mindfulness-getting-started/" target="_blank" rel="noreferrer">What is mindfulness?</a>
            </span>
            
            <span className="dashboard-text">
              <a href="" target="_blank" rel="noreferrer">What are all the benefits of mindfulness?</a>
            </span>
            
            <span className="dashboard-text">Why meditate?</span>
            <span className="dashboard-text">
              Basically, it's the same reason someone exercises, eats healthy, or sleeps.
              Instead of getting physically stronger, healthier, or more alert,
              you become more aware of your own life. Gradually, you become more peaceful.
              And all it takes is sitting quietly for however much time you can dedicate.
              Who wouldn't want that?
            </span>
          </div>
          : <div className="info-btn-container">
            <button className="info-btn" onClick={showInfo}>Show info</button>
          </div>
      }

      <span className="dashboard-header">Guided Meditation Links</span>
      <Link to="/videos">
        <p className="dashboard-text">
          View Recommended Videos
        </p>
      </Link>

      <Link to="/apps">
        <p className="dashboard-text">
          View Recommended Apps
        </p>
      </Link>

      <span className="dashboard-header">Don't want a guided meditation today?</span>
      <Link to="/timer">
        <p className="dashboard-text">
          Go to Meditation Timer
        </p>
      </Link>
      
      <span className="dashboard-header">Already meditated? Answer a question to...</span>
      <Link to="/entry">
        <p className="dashboard-text">
          Boost your Mindfulness
        </p>
      </Link>
    </div>
  );
}

export default Dashboard;
