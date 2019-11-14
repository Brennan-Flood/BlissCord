import React from 'react';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // need to change to update and add some verification 
    // to prevent mass fetchChannels calls
    this.props.fetchChannels(this.props.serverId);
  }

  render() {
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
  }
}

export default ChannelIndex;