// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { currentUser, setMessages } from '../actions';
import Message from './message';
import MessageForm from './message_form';

class Messages extends Component {
  componentDidMount() {
    this.props.setMessages(this.props.selectedChannel);
    this.props.currentUser(prompt("What is your username?") || `user${Math.floor(10 + (Math.random() * 90))}`);
    setInterval(() => {
      this.props.setMessages(this.props.selectedChannel);
    }, 1000);
  }

  // Use the scrollHeight property of the messages DOM element, and set it to the scrollTop property.
  componentDidUpdate() {
    // Check if the user is already at the BOTTOM of the message box
    const isScrolledToBottom =
      this.listRef.scrollHeight - this.listRef.clientHeight <=
      this.listRef.scrollTop + 75;

    // Check if the user is already at the TOP of the message box
    const isScrolledToTop = this.listRef.scrollTop === 0;

    // Only update the scrollTop if the user is already at the BOTTOM or TOP
    if (isScrolledToBottom || isScrolledToTop) {
      this.listRef.scrollTop = this.listRef.scrollHeight;
    }
  }

  renderList = () => {
    return this.props.messages.map(message =>
      <Message message={message} key={message.id}/>
    )
  }

  render() {
    return (
      <div className="messages">
        <div className='messages-title'>Channel #{this.props.selectedChannel}</div>
        <div className='messages-container' ref={(listRef) => { this.listRef = listRef;}}>{ this.renderList() }</div>
        <MessageForm />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages, currentUser: currentUser }, dispatch
  )
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
