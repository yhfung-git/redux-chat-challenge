// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channelParams, this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // Reset message input

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value});
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} className='messages-form'>
      <input
        type="text"
        onChange={this.handleChange}
        placeholder='Type your message...'
        value={this.state.value}
      />
      <button type="submit">SEND</button>
    </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage }, dispatch
  )
}

function mapStateToProps(state) {
  return {
    // selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
