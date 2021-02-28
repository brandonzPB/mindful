import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './recVideos.css';

const RecVideos = () => {
  const { setDest, link } = useContext(UserContext);

  const [currentVideo, setCurrentVideo] = useState({ id: 0 });

  // if (!user.accessToken) {
  //   return (
  //     <Route exact path="/videos">
  //       <Redirect to="/" />
  //     </Route>
  //   )
  // }

  const nextVideo = () => {
    currentVideo.id < 5
      ? setCurrentVideo({
        ...currentVideo,
        id: currentVideo.id + 1
      })
      : setCurrentVideo({
        ...currentVideo,
        id: 0
      });
  }

  const previousVideo = () => {
    currentVideo.id > 0
      ? setCurrentVideo({
        ...currentVideo,
        id: currentVideo.id - 1
      })
      : setCurrentVideo({
        ...currentVideo,
        id: 5
      });
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/videos">
        <Redirect to="/" />
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

      <div id="video-modal">
        <div id="diana-container">
          <div className="video-container" style={{ display: currentVideo.id === 0 ? 'block' : 'none' }} >
            <span className="video-text">5 Minute Guided Breathing Meditation by Diana Winston</span>
            <iframe title="breathing-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/YFSc7Ck0Ao0" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>

          <div id="extra-video-container">
            <a href="https://dianawinston.com/meditations" target="_blank" rel="noreferrer">
              <span id="extra-video-text">Click here for more guided meditations by Diana Winston</span>
            </a>
          </div>
        </div>
        
        <div className="videos">
          <div className="video-container" style={{ display: currentVideo.id === 1 ? 'block' : 'none' }} >
            <span className="video-text">10 Minute Guided Meditation for Beginners</span>
            <iframe title="beginner-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/Evgx9yX2Vw8" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>

          <div className="video-container" style={{ display: currentVideo.id === 2 ? 'block' : 'none' }} >
            <span className="video-text">15 Minute Guided Meditation by Tibetan Buddhist Meditation Master</span>
            <iframe title="buddhist-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/5GSeWdjyr1c" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
          
          <div className="video-container" style={{ display: currentVideo.id === 3 ? 'block' : 'none' }} >
            <span className="video-text">15 Minute Guided Meditation by Alan Watts</span>
            <iframe title="watts-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/jPpUNAFHgxM" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
          

          <div className="video-container" style={{ display: currentVideo.id === 4 ? 'block' : 'none' }} >
            <span className="video-text">10 Minute Guided Meditation for Anxiety Relief</span>
            <iframe title="anxiety-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/O-6f5wQXSu8" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
          

          <div className="video-container" style={{ display: currentVideo.id === 5 ? 'block' : 'none' }} >
            <span className="video-text">11 Minute Guided Meditation for a New You</span>
            <iframe title="new-meditation"
              width="560" height="315" src="https://www.youtube.com/embed/lhtAj91Lpgw" 
              frameBorder="0" allowFullScreen className="iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
        </div>

        <div id="btns-container">
          <button id="prev-btn" onClick={previousVideo}>Previous</button>
          <button id="next-btn" onClick={nextVideo}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default RecVideos;
