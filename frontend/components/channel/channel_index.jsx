import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {serverId: null, loading: true, hide: true};
    this.handleChannelRemoval = this.handleChannelRemoval.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.getCurrentServer = this.getCurrentServer.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchChannels(this.props.serverId);
  //   this.setState({serverId: this.props.serverId});
  //   this.setState({loading: false})
  // }
  getCurrentServer() {
    let url = window.location.href.split('server').slice(1);
    if (url[0]) {
      let integer = parseInt(url[0].split('/').slice(1)[0]);
      return integer;
    } else {
      return -1;
    }
  }

  componentDidUpdate() {
    console.log(this.props.serverId)
    if (this.state.serverId !== this.getCurrentServer()) {
      this.setState({ loading: true, serverId: this.getCurrentServer()})
      this.props.fetchChannels(this.props.serverId);
      this.setState({ loading: false })
    }
    
   
  }

  handleChannelRemoval() {
    this.setState({updatePending: true})
  }

  toggleHide() {
    this.setState({hide: !this.state.hide})
  }

  render() {
   
    if (this.state.loading === true){
      return (<h1>loading...</h1>);
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