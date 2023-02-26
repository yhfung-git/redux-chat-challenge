import React from 'react';
import Messages from '../containers/messages';
import Channels from '../containers/channels';

const App = () => {
  return (
    <div className="app">
      <div className='logo'>
        <img src="https://raw.githubusercontent.com/lewagon/chat-redux/c94c9f868508de31d48346dee1bf1141a2f152db/assets/images/logo.svg" alt="logo" />
      </div>
      <Channels />
      <Messages />
    </div>
  );
};

export default App;
