import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Entry from './Entry';

const EntryForm = () => {
  const { user, dispatch, updateEntries } = useContext(UserContext);

  const [entry, setEntry] = useState({
    text: ''
  });

  if (!user.accessToken) {
    return (
      <Route exact path="/entry">
        <Redirect to="/" />
      </Route>
    )
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
    
    // update number of entries completed
    dispatch({ type: 'COMPLETE_ENTRY', user: {
      entries: user.entries + 1
    }});
    
    // update database info
    updateEntries(count);

    // show modal with option to download file to computer, or...
    // share to Facebook
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="entry-form">
        <Entry />
        <input 
          className="entry-input"
          type="text"
          value={entry.text}
          onChange={handleChange}
        />
        <button className="submit-btn">Complete Entry</button>
      </form>
    </div>
  );
}

export default EntryForm;
