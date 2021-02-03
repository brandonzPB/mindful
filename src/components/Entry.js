import React from 'react';

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
