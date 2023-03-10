// External
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Internal
import { setChannels } from '../actions';
import Channel from './channel';

class Channels extends Component {
  renderList = () => this.props.channels.map(channel =>
    <Channel channel={channel} key={channel} channelParams={this.props.channelParams}/>
  );

  componentDidMount() {
    this.props.setChannels();
  }

  render() {
    return (
      <div className="channels">
        <div className='channels-title'>Redux Chat</div>
        <div className='channels-container'>{ this.renderList() }</div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannels: setChannels }, dispatch
  )
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
