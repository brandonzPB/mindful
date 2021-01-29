import React, { useState, useContext } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Entry from './Entry';
import Modal from './Modal';

const EntryForm = () => {
  const { user, dispatch, updateEntries } = useContext(UserContext);

  const [entry, setEntry] = useState({ text: '' });

  const [modalState, setModalState] = useState({ show: false });

  const [returnHome, setReturnHome] = useState({ route: false });

  if (!user.accessToken) {
    return (
      <Route exact path="/entry">
        <Redirect to="/" />
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

    setReturnHome({
      ...returnHome,
      route: true
    });
  }

  const handleChange = event => {
    setEntry({
      ...entry,
      text: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    const count = user.entries + 1;

    const text = { input: entry.text };
    
    // update number of entries completed
    // dispatch({ type: 'COMPLETE_ENTRY', user: {
    //   entries: user.entries + 1,
    //   text,
    // }});
    
    // update database info
    // updateEntries(count);

    openModal();
  }

  return (
    <div className="entry-container">

      {
        returnHome.route
          ? <Route exact path="/entry">
            <Redirect to="/dashboard" />
          </Route>
          : <div className="form-container">
            <Link to="/dashboard">
              <p>Return to Dashboard</p>
            </Link>
            <form onSubmit={handleSubmit} className="entry-form">
              <Entry />
              <input 
                className="entry-input"
                id="entry-input"
                type="text"
                value={entry.text}
                onChange={handleChange}
              />
              <button className="submit-btn toggle-button">Complete Entry</button>
            </form>

            <Modal modalState={modalState} closeModal={closeModal} />
          </div>
      }

    </div>
  );
}

export default EntryForm;
