// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { currentUser, setMessages } from '../actions';
import Message from './message';
import MessageForm from './message_form';

class Messages extends Component {
  UNSAFE_componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
    this.props.currentUser(prompt("What is your username?") || `user${Math.floor(10 + (Math.random() * 90))}`);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.setMessages(this.props.selectedChannel);
    }, 1000);
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
        <div className='messages-container'>{ this.renderList() }</div>
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
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
