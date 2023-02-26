// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { setMessages } from '../actions';
import Message from './message';
import MessageForm from './message_form';

class Messages extends Component {
  UNSAFE_componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
    // this.props.currentUser(prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`);
  }

  renderList = () => {
    return this.props.messages.map(message =>
      <Message message={message} key={message.created_at}/>
    )
  }

  render() {
    return (
      <div className="messages">
        <div className='messages-title'>Channel #xxx</div>
        <div className='messages-container'>{this.renderList()}</div>
        <div className='messages-form'><MessageForm /></div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages }, dispatch
  )
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
