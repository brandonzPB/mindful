import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // go to timer, videos, or recommended apps
  // or select "I just finished meditating on my own time and would like to answer a question"
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Link to="/entry">
        <p>
          Go to entry page
        </p>
      </Link>
    </div>
  );
}

export default Dashboard;
