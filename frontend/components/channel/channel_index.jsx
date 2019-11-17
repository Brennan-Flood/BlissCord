import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {serverId: null, loading: true, hide: true};
    this.handleChannelRemoval = this.handleChannelRemoval.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels(this.props.serverId);
    this.setState({serverId: this.props.serverId});
    this.setState({loading: false})
  }

  componentDidUpdate(prevProps) {
    if (this.state.serverId !== this.props.serverId) {
      this.setState({serverId: this.props.serverId});
      this.props.fetchChannels(this.props.serverId);
      this.setState({loading: false})
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