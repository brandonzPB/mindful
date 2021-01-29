import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, Route, Redirect } from 'react-router-dom';
import timerImg from '../images/timer.jpeg';
import videoImg from '../images/video.jpeg';
import appImg from '../images/app.jpeg';
import entryImg from '../images/meditate.jpeg';
import infoImg from '../images/knowledge.jpeg';

const Dashboard = () => {
  const { user, link, setDest } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'info') {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/info" />
      </Route>
    )
  }

  if (link.dest === 'entry') {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/entry" />
      </Route>
    )
  }

  if (link.dest === 'videos') {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/videos" />
      </Route>
    )
  }

  if (link.dest === 'apps') {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/apps" />
      </Route>
    )
  }

  if (link.dest === 'timer') {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/timer" />
      </Route>
    )
  }

  /*
  <div className="body">
        <div className="links-container">
          <img src={knowledgeImg} alt="Icon of a lightbulb" id="light-icon" />
          <Link to="/info">
            <p className="dashboard-text-link">Learn More</p>
          </Link>

          <img src={videoImg} alt="Video icon" id="video-icon" />
          <Link to="/videos">
            <p className="dashboard-text-link">
              Guided Meditation Videos
            </p>
          </Link>

          <img src={appImg} alt="App icon" id="app-icon" />
          <Link to="/apps">
            <p className="dashboard-text-link">
              Guided Meditation Apps
            </p>
          </Link>

          <img src={timerImg} alt="Timer icon" id="timer-icon" />
          <Link to="/timer">
            <p className="dashboard-text-link">
              Meditation Timer
            </p>
          </Link>

          <img src={meditateImg} alt="Icon of someone meditating" id="meditate-icon" />
          <Link to="/entry">
            <p className="dashboard-text-link">
              Boost your Personal Mindfulness
            </p>
          </Link>
        </div>
      </div>
  */

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-top-text">
        {
          user.entries > 0
            ? `Welcome back, ${user.firstName} :)`
            : `Welcome ${user.firstName} :)`
        }
      </h1>
      <h1 className="dashboard-top-text-info">
        {
          user.entries > 0
            ? `You've completed ${user.entries} mindfulness entries so far. Keep up the good work!`
            : ``
        }
      </h1>

      <div className="body">
        <div className="body-icon-link" id="body-info-link">
          <img src={infoImg} alt="Icon of lightbulb" id="info-icon" onClick={() => setDest('info')} />
        </div>

        <div className="body-icon-link" id="body-videos-link">
          <img src={videoImg} alt="Icon of video play button" id="video-icon" onClick={() => setDest('videos')} />
        </div>

        <div className="body-icon-link" id="body-apps-link">
          <img src={appImg} alt="Icon of mobile app" id="app-icon" onClick={() => setDest('apps')} />
        </div>

        <div className="body-icon-link" id="body-timer-link">
          <img src={timerImg} alt="Icon of timer" id="timer-icon" onClick={() => setDest('timer')} />
        </div>

        <div className="body-icon-link" id="body-entry-link">
          <img src={entryImg} alt="Icon of person meditating" id="entry-icon" onClick={() => setDest('entry')} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
