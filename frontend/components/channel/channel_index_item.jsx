import React from 'react';
import { Link } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: true, deleted: false, updatePending: true};
    this.toggleHide = this.toggleHide.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    if (this.state.updatePending) {
      this.setState({updatePending: false})
    }
  }

  toggleHide() {
    this.setState({hide: !this.state.hide});
  }

  handleDelete() {
    this.props.deleteChannel(this.props.serverId, this.props.channel.id)
    .then(() => this.props.handleRemoval())
  }

  render() {
    const ChannelOptions = (
      <div className="channel-options-modal">
        <div className="channel-options">
          <button className="channel-options-cancel" onClick={this.toggleHide}>x</button>
          <h1 className="channel-options-header">{'# ' + this.props.channel.name}</h1>
          <button className="channel-delete-button" onClick={this.handleDelete}>Delete Channel</button>
        </div>
      </div>
    )
    return (
      
        <li className="channel-index-item" key={this.props.channel.id}>
          <Link className="channel-link" to={`/home/server/${this.props.channel.server_id}/channel/${this.props.channel.id}`} >
            <h1 className="channel-bullet">#</h1>
            <h1 className="channel-index-name">{this.props.channel.name}</h1>
          </Link>

            <button className="channel-options-cog" onClick={this.toggleHide}>
              <img className = "channel-options-icon" src="images/white-cog.png"></img>
            </button>
          {this.state.hide || ChannelOptions }
        </li>
     
    )
  }
}

export default ChannelIndexItem;