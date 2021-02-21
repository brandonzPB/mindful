import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Route, Redirect } from 'react-router-dom';

import timerImg from '../../images/timer.jpeg';
import videoImg from '../../images/video.jpeg';
import appImg from '../../images/app.jpeg';
import entryImg from '../../images/meditate.jpeg';
import infoImg from '../../images/knowledge.jpeg';

import './dashboard.css';

const Dashboard = () => {
  const { link, setDest } = useContext(UserContext);

  const [title, setTitle] = useState({ ref: 'start' });

  // user is logged out; redirect to index
  // if (!user.accessToken) {
  //   return (
  //     <Route exact path="/dashboard">
  //       <Redirect to="/" />
  //     </Route>
  //   )
  // }  

  // route to info page
  if (link.dest === 'info') {
    return (
      <Route exact path="/">
        <Redirect to="/info" />
      </Route>
    )
  }

  // route to entry form
  if (link.dest === 'entry') {
    return (
      <Route exact path="/">
        <Redirect to="/entry" />
      </Route>
    )
  }

  // route to videos
  if (link.dest === 'videos') {
    return (
      <Route exact path="/">
        <Redirect to="/videos" />
      </Route>
    )
  }

  // route to apps
  if (link.dest === 'apps') {
    return (
      <Route exact path="/">
        <Redirect to="/apps" />
      </Route>
    )
  }

  // route to timer
  if (link.dest === 'timer') {
    return (
      <Route exact path="/">
        <Redirect to="/timer" />
      </Route>
    )
  }

  // route to settings
  // if (link.dest === 'settings') {
  //   return (
  //     <Route exact path="/dashboard">
  //       <Redirect to="/settings" />
  //     </Route>
  //   )
  // }

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

  const handleMouseOut = () => {
    setTitle({
      ...title,
      ref: ''
    });
  }

  return (
    <div className="dashboard-container">
      <div id="header-container">
        <span id="header">welcome to mindful.io</span>
        <span id="subheader">The free website that helps you be more at peace in your daily life with a simple, healthy habit</span>
      </div>
      
      <div className="body">
        <div className="body-icon-link" id="body-videos-link">
          <img 
            src={videoImg} alt="Icon of video play button" id="video-icon" className="icon video" 
            onClick={() => setDest('videos')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
          <span className="icon-text">Guided Meditation Videos</span>
        </div>

        <div className="body-icon-link" id="body-apps-link">
          <img 
            src={appImg} alt="Icon of mobile app" id="app-icon" className="icon app" 
            onClick={() => setDest('apps')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
          <span className="icon-text">Guided Meditation Apps</span>
        </div>

        <div className="body-icon-link" id="body-entry-link">
          <img 
            src={entryImg} alt="Icon of person meditating" id="entry-icon" className="icon entry" 
            onClick={() => setDest('entry')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
          <span className="icon-text">Boost Mindfulness</span>
        </div>

        <div className="body-icon-link" id="body-timer-link">
          <img 
            src={timerImg} alt="Icon of timer" id="timer-icon" className="icon timer" 
            onClick={() => setDest('timer')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
          <span className="icon-text">Meditation Timer</span>
        </div>

        <div className="body-icon-link" id="body-info-link">
          <img 
            src={infoImg} alt="Icon of lightbulb" id="info-icon" className="icon info" 
            onClick={() => setDest('info')} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} />
          <span className="icon-text">Mindfulness Info</span>
        </div>
      </div>
      
      <div className="app-text-container">
        <span className="app-text">
          {
            title.ref === 'start' ? 'Hover over one of the icons!'
              : title.ref === 'video' ? 'Guided Meditation Videos'
              : title.ref === 'app' ? 'Meditation Apps'
              : title.ref === 'timer' ? 'Meditation Timer'
              : title.ref === 'entry' ? 'Boost Mindfulness'
              : title.ref === 'info' ? 'Mindfulness Info' : ''
          }
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
