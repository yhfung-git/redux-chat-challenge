import React from 'react';
import Messages from '../containers/messages';
import Channels from '../containers/channels';
import { useParams } from 'react-router-dom';

const App = () => {
  const { channel } = useParams();

  return (
    <div className="app">
      <div className='logo'>
        <img src="https://raw.githubusercontent.com/lewagon/chat-redux/c94c9f868508de31d48346dee1bf1141a2f152db/assets/images/logo.svg" alt="logo" />
      </div>
      <Channels channelParams={ channel } />
      <Messages channelParams={ channel } />
    </div>
  );
};

export default App;
