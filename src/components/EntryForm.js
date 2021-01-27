import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Entry from './Entry';

const EntryForm = () => {
  const { user, dispatch, updateEntries } = useContext(UserContext);

  const [entry, setEntry] = useState({ text: '' });

  const shareUrl = 'https://brandonzpb.github.io/creatures';
  const title = 'Live in the Present with Mindful.io';

  if (!user.accessToken) {
    return (
      <Route exact path="/entry">
        <Redirect to="/" />
      </Route>
    )
  }

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

    // show modal
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="entry-form">
        <Entry />
        <input 
          className="entry-input"
          id="entry-input"
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
