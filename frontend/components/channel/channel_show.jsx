import React from 'react';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.serverId, this.props.channelId);
  }

  render() {
    console.log(this.props.channel)
    if (this.props.channel) {
    return (
      <div className="channel-show">
        <h2 className="channel-show-name">{this.props.channel.name}</h2>
      </div>
    ) } else {
      return <h1>loading...</h1>
    }
  }
}

export default ChannelShow;