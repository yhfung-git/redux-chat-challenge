import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder='Type your message...'/><button>SEND</button>
      </div>
    )
  }
}

export default MessageForm;
