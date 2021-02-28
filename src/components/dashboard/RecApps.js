import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import buddhifyImg from '../../images/buddhify.jpeg';
import headspaceImg from '../../images/headspace.jpeg';
import insightImg from '../../images/insight_timer.jpeg';
import tenPercentImg from '../../images/ten_percent.jpeg';
import stopImg from '../../images/stop_breathe_think.jpeg';

import './recApp.css';

const RecApps = () => {
  const { link, setDest } = useContext(UserContext);

  const [currentApp, setCurrentApp] = useState({ id: 0 });

  // if (!user.accessToken) {
  //   return (
  //     <Route exact path="/apps">
  //       <Redirect to="/" />
  //     </Route>
  //   )
  // }

  const nextApp = () => {
    currentApp.id < 4
      ? setCurrentApp({
        ...currentApp,
        id: currentApp.id + 1
      })
      : setCurrentApp({
        ...currentApp,
        id: 0
      });
  }

  const previousApp = () => {
    currentApp.id > 0
      ? setCurrentApp({
        ...currentApp,
        id: currentApp.id - 1
      })
      : setCurrentApp({
        ...currentApp,
        id: 4
      });
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/apps">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'entry') {
    return (
      <Route exact path="/apps">
        <Redirect to="/entry" />
      </Route>
    )
  }

  return (
    <div className="rec-app-container">
      <span className="rec-text">Try out these apps if you'd like an app-guided meditation. </span>
      <span className="rec-text">Click the 'Boost Mindfulness' button below to answer a question when you're ready.</span>
      
      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
        <button className="dest-btns entry-route-btn" onClick={() => setDest('entry')}>Boost Mindfulness</button>
      </div>

      <div id="apps-modal">
        <div className="app-container" style={{ display: currentApp.id === 0 ? 'block' : 'none' }} >
          <a href="https://insighttimer.com/" target="_blank" rel="noreferrer">
            <img src={insightImg} alt="Insight Timer logo" className="insight-img logo-img" />
          </a>

          <span className="app-text">
            Insight Timer is a free app that provides guided meditation for mindfulness, stress, yoga, and sleep. 
          </span>
        </div>

        <div className="app-container" style={{ display: currentApp.id === 1 ? 'block' : 'none' }} >
          <a href="https://www.headspace.com/" target="_blank" rel="noreferrer">
            <img src={headspaceImg} alt="Headspace logo" className="headspace-img logo-img" />
          </a>

          <span className="app-text">
            Headspace is a paid app with a free trial, that provides guided meditation for mindfulness, stress, and sleep.
          </span>
        </div>

        <div className="app-container" style={{ display: currentApp.id === 2 ? 'block' : 'none' }} >
          <a href="https://www.tenpercent.com/" target="_blank" rel="noreferrer">
            <img src={tenPercentImg} alt="Ten Percent Happier logo" className="ten-percent-img logo-img" />
          </a>

          <span className="app-text">
            Ten Percent Happier is a paid app with a free trial, that includes guided meditation, a podcast, a newsletter.
          </span>
        </div>

        <div className="app-container" style={{ display: currentApp.id === 3 ? 'block' : 'none' }} >
          <a href="https://www.stopbreathethink.com/kids/" target="_blank" rel="noreferrer">
            <img src={stopImg} alt="Stop, Breathe and Think logo" className="stop-img logo-img" />
          </a>

          <span className="app-text">
            Stop, Breathe & Think is a paid app that provides expert-driven guided meditation, specialized content, 
            and programs for schools and businesses. It also offers emotional check-ins.
          </span>
        </div>

        <div className="app-container" style={{ display: currentApp.id === 4 ? 'block' : 'none' }} >
          <a href="https://buddhify.com//" target="_blank" rel="noreferrer">
            <img src={buddhifyImg} alt="Buddhify logo" className="buddhify-img logo-img" />
          </a>

          <span className="app-text">
            Buddhify is a paid app that offers guided meditation on the go, for those who live busy lives and struggle to set
            aside time to sit and meditate.
          </span>
        </div>

        <div id="app-btns-container">
          <button id="prev-btn" onClick={previousApp}>Previous</button>
          <button id="next-btn" onClick={nextApp}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default RecApps;
