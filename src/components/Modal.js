import React, { useContext } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { UserContext } from '../contexts/UserContext';
import PropTypes from 'prop-types';

const Modal = ({ modalState, closeModal }) => {
  const { user } = useContext(UserContext);
  const shareUrl = 'https://brandonzpb.github.io/creatures';
  const title = 'Live in the Present with Mindful.io';

  const downloadTxt = () => {
    const element = document.createElement('a');

    const file = new Blob([ user.tempText[user.entries - 1].input ], { type: 'text/plain' });

    /*
    document.getElementById('entry-input').value
    */

    element.href = URL.createObjectURL(file);
      element.download = `myFile${user.entries - 1}.txt`;
    
    document.body.appendChild(element);
    element.click();
  }

  if (!user.accessToken) {
    return (
      <div className="empty"></div>
    )
  }

  if (!modalState.show) {
    return (
      <div className="null"></div>
    )
  }

  return (
    <div className="modal-parent-container">
      <div className="modal-container">
        <div className="fb-share-container">
          <span className="fb-share-text">Enjoyed being more mindful? Tell your friends about your experience!</span>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="fb-share-btn"
          >
            <FacebookIcon size={64} round />
          </FacebookShareButton>
        </div>

        <div className="save-file-container">
          <span className="save-file-text">As part of your privacy, we don't collect your responses</span>
          <span className="save-file-text">Click 'Download' below if you want to save your response to view later (only chance!)</span>
          <button onClick={downloadTxt} className="save-file-btn">Download</button>
        </div>

        <div className="close-container">
          <button onClick={closeModal} className="close-btn toggle-button">Return Home</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
