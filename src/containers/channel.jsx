// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
    this.props.setMessages(this.props.channel);
  }

  render() {
    let classes = 'channel';
    if (this.props.channel === this.props.selectedChannel) {
      classes += ' active';
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        <p># {this.props.channel}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectChannel: selectChannel,
      setMessages: setMessages
    }, dispatch
  )
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
