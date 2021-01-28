import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  // go to timer, videos, or recommended apps
  // or select "I just finished meditating on my own time and would like to answer a question"
  const { user } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/" />
      </Route>
    )
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

      <span className="dashboard-text">Guided Meditation Links</span>
      <Link to="/videos">
        <p>
          View Recommended Videos
        </p>
      </Link>

      <Link to="/apps">
        <p>
          View Recommended Apps
        </p>
      </Link>

      <span className="dashboard-text">Don't want a guided meditation today?</span>
      <Link to="/timer">
        <p>
          Go to Meditation Timer
        </p>
      </Link>
      
      <span className="dashboard-text">Already meditated?</span>
      <Link to="/entry">
        <p>
          Answer a Question to Boost your Mindfulness
        </p>
      </Link>
    </div>
  );
}

export default Dashboard;
