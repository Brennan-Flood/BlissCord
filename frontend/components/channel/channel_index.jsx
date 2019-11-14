import React from 'react';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {serverId: null}
  }

  componentDidMount() {
    this.props.fetchChannels(this.props.serverId);
    this.setState({serverId: this.props.serverId});
  }

  componentDidUpdate() {
    if (this.props.serverId !== this.state.serverId) {
    this.setState({serverId: this.props.serverId});
    this.props.fetchChannels(this.props.serverId);
    }
  }

  render() {
    if (this.props.serverId != this.state.serverId) {
      return null;
    } else {
    return (
      <ul className="channel-list">
        {this.props.channels.map((channel) => {
          return <li className="channel-item"
            key={channel.id}> 
      
            {'#' + channel.name} 
          </li>
        })}
      </ul>
    )
  };
  }
}

export default ChannelIndex;