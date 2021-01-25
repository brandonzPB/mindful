import  React from 'react';
import { HashRouter, BrowserRouter, Route, } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Terms from './components/Terms';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/terms" component={Terms} />
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
