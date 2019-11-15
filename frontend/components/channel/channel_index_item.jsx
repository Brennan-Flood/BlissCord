import React from 'react';
import { Link } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: true, deleted: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }



  handleClick() {
    this.setState({hide: !this.state.hide});
  }

  handleDelete() {
    this.props.deleteChannel(this.props.serverId, this.props.channel.id)
    .then(() => this.props.handleRemoval())
  }

  render() {
    const ChannelOptions = (
      <div className="channel-options">
        <button onClick={this.handleDelete}>Delete Channel</button>
      </div>
    )
    return (
      
        <li className="channel-index-item" key={this.props.channel.id}>
          <Link to={`/home/server/${this.props.channel.server_id}/channel/${this.props.channel.id}`} >
            <h1 className="channel-bullet">#</h1>
            <h1>{this.props.channel.name}</h1>
          </Link>

            <button onClick={this.handleClick}>Cog</button>
          {this.state.hide || ChannelOptions }
        </li>
     
    )
  }
}

export default ChannelIndexItem;