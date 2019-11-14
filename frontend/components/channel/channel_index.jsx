import React from 'react';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    this.props.fetchChannels(this.props.serverId);

  }

  render() {
    return (
      <ul>
        {this.props.channels.map((channel) => {
          <li> {channel.name} </li>
        })}
      </ul>
    )
  }
}

export default ChannelIndex;