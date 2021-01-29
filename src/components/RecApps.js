import React, { useContext } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const RecApps = () => {
  const { user } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/apps">
        <Redirect to="/" />
      </Route>
    )
  }

  return (
    <div className="rec-app-container">
      <span className="rec-text">Try out these apps if you'd like an app-guided meditation</span>

      <span className="rec-text">
        When you're finished meditating, come back here 
        to help improve your daily mindfulness outside of meditation 
        by answering a short question
      </span>
      <span className="rec-text">Click the 'Boost Mindfulness' button below to answer a question when you're ready</span>
      <Link to="/entry">
        <p>Boost Mindfulness</p>
      </Link>

      <Link to="/dashboard">
        <p>Return to Dashboard</p>
      </Link>

      <ul className="app-list">
        <li className="app-list-item">
          <a href="https://insighttimer.com/" target="_blank" rel="noreferrer">
            Insight Timer
          </a>
        </li>

        <li className="app-list-item">
          <a href="https://www.headspace.com/" target="_blank" rel="noreferrer">
            Headspace
          </a>
        </li>

        <li className="app-list-item">
          <a href="https://www.tenpercent.com/" target="_blank" rel="noreferrer">
            Ten Percent Happier
          </a>
        </li>

        <li className="app-list-item">
          <a href="https://www.stopbreathethink.com/kids/" target="_blank" rel="noreferrer">
            Stop, Breathe & Think (for kids)
          </a>
        </li>

        <li className="app-list-item">
          <a href="https://buddhify.com//" target="_blank" rel="noreferrer">
            Buddhify
          </a>
        </li>

      </ul>
    </div>
  );
}

export default RecApps;
