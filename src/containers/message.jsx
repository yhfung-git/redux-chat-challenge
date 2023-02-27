import React, { Component } from 'react';


// to set up the username's color randomly
function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends Component {
  render() {
    const { created_at, author, content } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();

    return (
      <div className='message'>
        <h6 style={{ color: strToRGB(author) }}>{author}<small> - {time}</small></h6>
        <p>{content}</p>
      </div>
    )
  }
}

export default Message;
