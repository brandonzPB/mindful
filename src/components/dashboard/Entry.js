import React from 'react';
import './entry.css';

const Entry = ({ entry }) => {
  return (
    <div className="entry-container">
      <span id="entry-question-text">
        {entry.obj.text}
      </span>
    </div>
  );
}

export default Entry;
