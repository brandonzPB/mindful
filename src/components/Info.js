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
    <div className="info-parent-container">
      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
      </div>

      <span className="info-header">Knowledge is power! Click any of the black text below to learn more</span>

      <div className="info-container">           
        <span className="info-text">
          <a 
            href="https://www.mindful.org/meditation/mindfulness-getting-started/" 
            target="_blank" rel="noreferrer">
              What is mindfulness?
          </a>
        </span>
        <br />
        <span className="info-text">
          <a 
            href="https://positivepsychology.com/benefits-of-mindfulness/" 
            target="_blank" rel="noreferrer">
              What are all the benefits of mindfulness?
          </a>
        </span>
        <br />
        <span className="info-text">
          <a 
            href="https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health"
            target="_blank" rel="noreferrer">
              Is there any research supporting mindfulness and its benefits?
          </a>
        </span>
        <br />
        <span className="info-text">
          <a 
            href="https://www.helpguide.org/harvard/benefits-of-mindfulness.htm#:~:text=Mindfulness%20improves%20physical%20health.&text=Mindfulness%20can%3A%20help%20relieve%20stress,sleep%2C%20and%20alleviate%20gastrointestinal%20difficulties."
            target="_blank" rel="noreferrer">
              Is there a simple yet thorough guide to what this all means and how to go about it?
          </a>
        </span>

        <br />
        <span className="info-text">Why meditate?</span>
        <span className="info-text">
          Basically, it's the same fundamental reason someone exercises or follows a healthy diet: to live a healthier, happier life.
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
