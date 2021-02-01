import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Route, Redirect } from 'react-router-dom';
import timerImg from '../images/timer.jpeg';
import videoImg from '../images/video.jpeg';
import appImg from '../images/app.jpeg';
import entryImg from '../images/meditate.jpeg';
import infoImg from '../images/knowledge.jpeg';

const Dashboard = () => {
  const { user, link, setDest } = useContext(UserContext);

  const [title, setTitle] = useState({ ref: '' });

  if (!user.accessToken) {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/" />
      </Route>
    )
  }  

  const handleMouseOver = event => {
    const eventClass = event.target.className;
    const whiteSpaceIndex = eventClass.indexOf(' ');

    let targetClass = '';
    for (let i = whiteSpaceIndex + 1; i < eventClass.length; i++) {
      targetClass += eventClass[i];
    }

    setTitle({
      ...title,
      ref: targetClass
    });
  }

  const handleMouseOut = event => {
    setTitle({
      ...title,
      ref: ''
    });
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
        <div className="body-icon-link" id="body-videos-link">
          <img 
            src={videoImg} alt="Icon of video play button" id="video-icon" className="icon video" 
            onClick={() => setDest('videos')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
        </div>

        <div className="body-icon-link" id="body-apps-link">
          <img 
            src={appImg} alt="Icon of mobile app" id="app-icon" className="icon app" 
            onClick={() => setDest('apps')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
        </div>

        <div className="body-icon-link" id="body-entry-link">
          <img 
            src={entryImg} alt="Icon of person meditating" id="entry-icon" className="icon entry" 
            onClick={() => setDest('entry')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
        </div>

        <div className="body-icon-link" id="body-timer-link">
          <img 
            src={timerImg} alt="Icon of timer" id="timer-icon" className="icon timer" 
            onClick={() => setDest('timer')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
        </div>

        <div className="body-icon-link" id="body-info-link">
          <img 
            src={infoImg} alt="Icon of lightbulb" id="info-icon" className="icon info" 
            onClick={() => setDest('info')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
        </div>
      </div>
      <div className="app-text-container">
        <span className="app-text">
          {
            title.ref === 'video' ? 'Guided Meditation Videos'
              : title.ref === 'app' ? 'Meditation Apps'
              : title.ref === 'timer' ? 'Meditation Timer'
              : title.ref === 'entry' ? 'Mindfulness Questions'
              : title.ref === 'info' ? 'Mindfulness Info' : ''
          }
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
