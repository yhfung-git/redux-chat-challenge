import React, { Component } from 'react';

class Message extends Component {
  render() {
    console.log(this.props.message);
    return (
      <div className='message'>
        <h6>{this.props.message.author}<small> - {this.props.message.created_at}</small></h6>
        <p>{this.props.message.content}</p>
      </div>
    )
  }
}

export default Message;
