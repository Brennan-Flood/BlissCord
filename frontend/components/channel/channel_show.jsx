import React from 'react';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.serverId, this.props.channelId);
  }

  render() {
    if (this.props.channel) {
    return (
      <div className="channel-show">
        <header className="channel-show-header">
        <h1 className="channel-show-bullet">#</h1>
        <h2 className="channel-show-name">{this.props.channel.name}</h2>
        </header>
      </div>
    ) } else {
      return <h1>loading...</h1>
    }
  }
}

export default ChannelShow;