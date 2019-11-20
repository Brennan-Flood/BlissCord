import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {serverId: this.props.serverId, loading: true, hide: true, updatePending: false};
    this.handleChannelRemoval = this.handleChannelRemoval.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.getCurrentServer = this.getCurrentServer.bind(this);
    this.fetchChannels = this.fetchChannels.bind(this);
  
  }

  fetchChannels() {
    this.props.fetchChannels(this.getCurrentServer())
  }

  getCurrentServer() {
    let url = window.location.href.split('server').slice(1);
    if (url[0]) {
      let integer = parseInt(url[0].split('/').slice(1)[0]);
      return integer;
    } else {
      return -1;
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    this.fetchChannels();
    this.setState({loading: false});
  }

  componentDidUpdate() {
    
    if (this.state.serverId !== this.getCurrentServer()) {
      this.props.fetchChannels(this.getCurrentServer());
      this.setState({serverId: this.getCurrentServer()})
    } else if (this.state.updatePending) {
      this.props.fetchChannels(this.getCurrentServer());
      this.setState({updatePending: false})
    }
  }

  handleChannelRemoval() {
    this.setState({updatePending: true})
    this.componentDidUpdate();
  }

  toggleHide() {
    this.setState({hide: !this.state.hide})
  }

  render() {
    if (!this.props.channels[0] && this.state.serverId === this.getCurrentServer()) {
      return (<h1 className="no-channels-message">No Channels Here {':('} </h1>)
    }
    if (this.props.channels[0] && (this.props.channels[0].server_id !== this.getCurrentServer() || this.updatePending)){
      return (<h1 className="loading"></h1>);
    } else {
    return (

        <div className="channel-list">
          {this.props.channels.map((channel) => {
            return ( 
            <ChannelIndexItemContainer
              handleRemoval={this.handleChannelRemoval}
              key={channel.id}
              channel={channel}
              deleteChannel={this.props.deleteChannel}
            /> 
            )})}
        </div>

    )
  };
  }
}

export default ChannelIndex;