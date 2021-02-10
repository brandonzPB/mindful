import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import buddhifyImg from '../../images/buddhify.jpeg';
import headspaceImg from '../../images/headspace.jpeg';
import insightImg from '../../images/insight_timer.jpeg';
import tenPercentImg from '../../images/ten_percent.jpeg';
import stopImg from '../../images/stop_breathe_think.jpeg';

import './recApp.css';

const RecApps = () => {
  const { user, link, setDest } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/apps">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/apps">
        <Redirect to="/dashboard" />
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

      <div className="app-list-container">
        <ul className="app-list">
          <li className="app-list-item">
            <a href="https://insighttimer.com/" target="_blank" rel="noreferrer">
              <img src={insightImg} alt="Insight Timer logo" className="insight-img logo-img" />
            </a>
          </li>

          <li className="app-list-item">
            <a href="https://www.headspace.com/" target="_blank" rel="noreferrer">
              <img src={headspaceImg} alt="Headspace logo" className="headspace-img logo-img" />
            </a>
          </li>

          <li className="app-list-item">
            <a href="https://www.tenpercent.com/" target="_blank" rel="noreferrer">
              <img src={tenPercentImg} alt="Ten Percent Happier logo" className="ten-percent-img logo-img" />
            </a>
          </li>

          <li className="app-list-item">
            <a href="https://www.stopbreathethink.com/kids/" target="_blank" rel="noreferrer">
              <img src={stopImg} alt="Stop, Breathe and Think logo" className="stop-img logo-img" />
            </a>
          </li>

          <li className="app-list-item">
            <a href="https://buddhify.com//" target="_blank" rel="noreferrer">
              <img src={buddhifyImg} alt="Buddhify logo" className="buddhify-img logo-img" />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default RecApps;
