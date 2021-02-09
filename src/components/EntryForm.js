import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Entry from './Entry';
import Modal from './Modal';
import { entries } from '../modules/entries';

const EntryForm = () => {
  const { user, dispatch, updateEntries, link, setDest } = useContext(UserContext);

  const [entry, setEntry] = useState({
    text: '',
    obj: '',
    selected: false,
  });

  let entryIndex;

  useEffect(() => {
    if (entry.selected) return;

    entryIndex = user.entries >= 2
      ? Math.floor(Math.random() * entries.length)
      : user.entries;
    
    setEntry({
      ...entry,
      obj: entries[entryIndex]
    });
  }, []);

  const [modalState, setModalState] = useState({ show: false });

  if (!user.accessToken) {
    return (
      <Route exact path="/entry">
        <Redirect to="/" />
      </Route>
    )
  }

  if (link.dest === 'dashboard') {
    return (
      <Route exact path="/entry">
        <Redirect to="/dashboard" />
      </Route>
    )
  }

  const openModal = () => {
    setModalState({
      ...modalState,
      show: true
    });
  }

  const closeModal = () => {
    setModalState({
      ...modalState,
      show: false
    });

    return setDest('dashboard');
  }

  const handleChange = event => {
    setEntry({
      ...entry,
      text: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (!entry.text.trim()) return;

    const count = user.entries + 1;

    const tempText = { input: entry.text };
    
    const tempCount = user.tempCount + 1;
    
    // update number of entries completed
    dispatch({ type: 'COMPLETE_ENTRY', user: {
      entries: user.entries + 1,
      tempText,
      tempCount 
    }});

    setEntry({
      ...entry,
      completed: true
    });
    
    // update database info
    updateEntries(count);

    openModal();
  }

  return (
    <div className="entry-container">
      <div className="btns-container">
        <button className="dest-btns dashboard-route-btn" onClick={() => setDest('dashboard')}>Return to Dashboard</button>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="entry-form">
          <Entry entry={entry} />
          <textarea 
            value={entry.text}
            id="entry-input"
            onChange={handleChange}
            rows={10}
            cols={50}
          />
          <button className="submit-btn toggle-button">Complete Entry</button>
        </form>

        <Modal modalState={modalState} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default EntryForm;
