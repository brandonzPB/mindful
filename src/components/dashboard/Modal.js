import React, { useContext } from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { UserContext } from '../../contexts/UserContext';
import './modal.css';

const Modal = ({ modalState, closeModal, entry }) => {
  // const { user } = useContext(UserContext);
  const shareUrl = 'https://brandonzpb.github.io/mindful';
  const title = 'Live in the Present with Mindful.io';

  const downloadTxt = () => {
    const element = document.createElement('a');

    const file = new Blob([ entry.text ], { type: 'text/plain' });

    /*
    document.getElementById('entry-input').value
    */

    element.href = URL.createObjectURL(file);
      element.download = `myFile${entry.id}.txt`;
    
    document.body.appendChild(element);
    element.click();
  }

  // if (!user.accessToken) {
  //   return (
  //     <div className="empty"></div>
  //   )
  // }

  if (!modalState.show) {
    return (
      <div className="null"></div>
    )
  }

  return (
    <div className="modal-parent-container">
      <div className="modal-container">
        <div className="fb-share-container">
          <span className="fb-share-text">Thank you for using mindul.io </span>
          <span className="fb-share-text">Enjoy being more mindful? Share your experience with your friends!</span>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="fb-share-btn"
          >
            <FacebookIcon size={90} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            quote={title}
            className="twitter-share-btn"
          >
            <TwitterIcon size={90} round />
          </TwitterShareButton>
        </div>

        <div className="save-file-container">
          <span className="save-file-text">As part of your privacy, we don't collect your responses.</span>
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
