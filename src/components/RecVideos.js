import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const RecVideos = () => {
  const { user, setDest, link } = useContext(UserContext);

  if (!user.accessToken) {
    return (
      <Route exact path="/videos">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/videos">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  if (link.dest === 'entry') {
    return (
      <Route exact path="/videos">
        <Redirect to="/entry" />
      </Route>
    )
  }

  return (
    <div className="rec-videos-container">
      <span className="videos-header">Once you have finished your meditation, click 'Boost Mindfulness' below to answer a short question!</span>

      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
        <button className="dest-btns entry-route-btn" onClick={() => setDest('entry')}>Boost Mindfulness</button>
      </div>
      
      <div className="videos">
        <div className="video-container">
          <span className="video-text">10 Minute Guided Meditation for Beginners</span>
          <iframe title="beginner-meditation"
            width="560" height="315" src="https://www.youtube.com/embed/Evgx9yX2Vw8" 
            frameBorder="0" allowfullscreen className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>

        <div className="video-container">
          <span className="video-text">15 Minute Guided Meditation by Tibetan Buddhist Meditation Master</span>
          <iframe title="buddhist-meditation"
            width="560" height="315" src="https://www.youtube.com/embed/5GSeWdjyr1c" 
            frameBorder="0" allowfullscreen className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
        
        <div className="video-container">
          <span className="video-text">15 Minute Guided Meditation by Alan Watts</span>
          <iframe title="watts-meditation"
            width="560" height="315" src="https://www.youtube.com/embed/jPpUNAFHgxM" 
            frameBorder="0" allowfullscreen className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
        

        <div className="video-container">
          <span className="video-text">10 Minute Guided Meditation for Anxiety Relief</span>
          <iframe title="anxiety-meditation"
            width="560" height="315" src="https://www.youtube.com/embed/O-6f5wQXSu8" 
            frameBorder="0" allowfullscreen className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
        

        <div className="video-container">
          <span className="video-text">11 Minute Guided Meditation for a New You</span>
          <iframe title="new-meditation"
            width="560" height="315" src="https://www.youtube.com/embed/lhtAj91Lpgw" 
            frameBorder="0" allowfullscreen className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default RecVideos;
