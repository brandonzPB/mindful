import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { entries } from '../modules/entries';

const Entry = () => {
  const { user } = useContext(UserContext);

  const entryCount = user.entries;

  const entry = entries[entryCount];

  return (
    <div className="entry-container">
      <span className="entry-question-text">
        {entry.text}
      </span>
    </div>
  );
}

export default Entry;
