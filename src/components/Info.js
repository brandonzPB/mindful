import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Info = () => {
  const { user, link, setDest } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/info">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/info">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  return (
    <div className="info-container">
      <div className="btns-container">
        <button className="dest-btns" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
      </div>

      <div className="info-container">   
        <span className="dashboard-header">Knowledge is power! Click any of the black links to learn more</span>        
        <span className="dashboard-text">
          <a 
            href="https://www.mindful.org/meditation/mindfulness-getting-started/" 
            target="_blank" rel="noreferrer">
              What is mindfulness?
          </a>
        </span>
        
        <span className="dashboard-text">
          <a href="https://positivepsychology.com/benefits-of-mindfulness/" target="_blank" rel="noreferrer">What are all the benefits of mindfulness?</a>
        </span>
        <span className="dashboard-text">
          <a href="https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health" target="_blank" rel="noreferrer">
            More research-based benefits of mindfulness
          </a>
        </span>

        <span className="dashboard-text">
          <a href="https://www.helpguide.org/harvard/benefits-of-mindfulness.htm#:~:text=Mindfulness%20improves%20physical%20health.&text=Mindfulness%20can%3A%20help%20relieve%20stress,sleep%2C%20and%20alleviate%20gastrointestinal%20difficulties."
            target="_blank" rel="noreferrer">
              A more thorough explanation and guide to mindfulness: its benefits, techniques, and exercises
          </a>
        </span>

        
        <span className="dashboard-text">Why meditate?</span>
        <span className="dashboard-text">
          Basically, it's the same reason someone exercises or follows a healthy diet.
          Instead of getting physically stronger or feeling healthier,
          you gain more control and awareness over your own life. Over time, you become more peaceful,
          regardless of what is going on around you and in your body. Like anything worthwhile and long-lasting,
          it may take a bit of time for you to initially see results.
          But all it takes for you to achieve true peace is to sit quietly for however much time you can dedicate in a given day.
          Who wouldn't want that?
        </span>
      </div>
    </div>
  );
}

export default Info;
