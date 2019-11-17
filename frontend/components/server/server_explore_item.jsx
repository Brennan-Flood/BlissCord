import React from 'react';

class ServerExploreItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let serverMembership = {server_id: this.props.server.id, member_id: this.props.currentUser.id};
    this.props.createServerMembership(serverMembership)
    .then(() => this.props.history.push(`/home/server/${serverMembership.server_id}`))
  }

  render() {
    return ( 
    <li className="server-explore-item" key={this.props.server.id} >
    <h1 className="server-explore-name">{this.props.server.name}</h1>
      <button className="server-explore-join-button" onClick={this.handleClick}>Join</button>
    </li>
    )
  }
}

export default ServerExploreItem;