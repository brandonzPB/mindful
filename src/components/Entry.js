import React, { useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { entries } from '../modules/entries';

const Entry = ({ entry, setEntry }) => {
  const { user } = useContext(UserContext);

  const entryCount = user.entries;
  let entryIndex;
  
  useEffect(() => {
    entryIndex = entryCount >= 2
      ? Math.floor(Math.random() * entries.length)
      : entryCount;

    setEntry({
      ...entry,
      set: true,
      index: entryIndex
    });
  }, [entry]);

  const entryObj = entries[entryIndex];

  return (
    <div className="entry-container">
      <span id="entry-question-text">
        {entryObj.text}
      </span>
    </div>
  );
}

export default Entry;
