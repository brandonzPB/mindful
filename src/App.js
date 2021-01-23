import  React, { useState } from 'react';
import { HashRouter, BrowserRouter, Route, } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const responseFacebook = response => {
    console.log('response', response);
    const name = response.name;
    if (loggedIn) return;
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App">
      <div className="login-container" style={{ display: loggedIn ? 'none' : '' }}>
        <FacebookLogin
          appId="3644277315654948"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook} 
        />
      </div>
    </div>
  );
}

export default App;
