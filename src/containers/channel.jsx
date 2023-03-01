// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Internal
// import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class Channel extends Component {
  // handleClick = () => {
  //   // this.props.selectChannel(this.props.channel);
  //   this.props.setMessages(this.props.channelParams);
  // }

  componentDidUpdate(nextProps) {
    if (nextProps.channelParams !== this.props.channelParams) {
      this.props.setMessages(nextProps.channelParams);
    }
  }

  render() {
    let classes = 'channel';
    if (this.props.channel === this.props.channelParams) {
      classes += ' active';
    }
    return (
      <div className={classes}
        // onClick={this.handleClick}
      >
        <Link to={`/${this.props.channel}`}>
          <p># {this.props.channel}</p>
        </Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // selectChannel: selectChannel,
      setMessages: setMessages
    }, dispatch
  )
}

// function mapStateToProps(state) {
//   return {
//     selectedChannel: state.selectedChannel
//   }
// }

export default connect(null, mapDispatchToProps)(Channel);
