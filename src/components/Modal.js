import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="fb-share-container">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="fb-share-btn"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default Modal;
