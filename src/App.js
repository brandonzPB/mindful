import  React from 'react';
import { HashRouter, BrowserRouter, Route, } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';

import Welcome from './components/Welcome';
import Terms from './components/Terms';
import LogoutButton from './components/LogoutButton';

import Dashboard from './components/Dashboard';
import RecVideos from './components/RecVideos';
import RecApps from './components/RecApps';
import Timer from './components/Timer';

import EntryForm from './components/EntryForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <LogoutButton />

          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/videos" component={RecVideos} />
          <Route exact path="/apps" component={RecApps} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/entry" component={EntryForm} />
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
