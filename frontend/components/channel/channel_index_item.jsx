import React from 'react';
import { Link } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: true, deleted: false, updatePending: true, viewing: false};
    this.toggleHide = this.toggleHide.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getCurrentChannel() {
    let url = window.location.href.split('channel').slice(1);
    if (url[0]) {
      let integer = parseInt(url[0].split('/').slice(1)[0]);
      return integer;
    } else {
      return -1;
    }
  }

  componentDidUpdate() {
    console.log(this.getCurrentChannel())
    if (this.props.channel.id === this.getCurrentChannel() && this.state.viewing === false) {
      this.setState({ viewing: true });
    } else if (this.props.channel.id !== this.getCurrentChannel() && this.state.viewing === true) {
      this.setState({ viewing: false })
    }
  }

  toggleHide() {
    this.setState({hide: !this.state.hide});
  }

  handleDelete() {
    this.toggleHide();
    this.props.deleteChannel(this.props.serverId, this.props.channel.id);
    this.props.handleRemoval();
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
      
        <li className={ this.state.viewing ? "viewing-channel-index-item" : "channel-index-item"} key={this.props.channel.id}>
          <Link className="channel-link" to={`/home/server/${this.props.channel.server_id}/channel/${this.props.channel.id}`} >
            <h1 className="channel-bullet">#</h1>
            <h1 className="channel-index-name">{this.props.channel.name.length > 20 ? this.props.channel.name.slice(0, 20) + '...' : this.props.channel.name}</h1>
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