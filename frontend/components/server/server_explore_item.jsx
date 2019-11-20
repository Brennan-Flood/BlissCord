import React from 'react';

class ServerExploreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {memberCount: this.props.memberCount};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.memberCount === undefined ) {
    this.loadData();
    }
  }
  
  loadData() {
    this.setState({memberCount: this.props.memberCount});
  }

  handleClick() {
    let serverMembership = {server_id: this.props.server.id, member_id: this.props.currentUser.id};
    this.props.createServerMembership(serverMembership)
    .then(() => this.props.history.push(`/home/server/${serverMembership.server_id}`))
  }

  render() {
    const serverWords = this.props.server.name.split(' ')
    let serverInitials = serverWords.map((word) => {
      return word.slice(0, 1).toUpperCase()
    })
    if (serverInitials.length > 3) {
      serverInitials = serverInitials.slice(0, 3)
    }
    return ( 
    <li className="server-explore-item" key={this.props.server.id} >
      <div className="server-explore-item-header">
        <div className="server-explore-icon" id={this.props.server.id} >
            <h1 className="server-explore-initials">{serverInitials}</h1>
        </div>
        <button className="server-explore-join-button" onClick={this.handleClick}>JOIN SERVER</button>
      </div>
    <h1 className="server-explore-name">{this.props.server.name}</h1>
    
    <footer className="server-explore-member-info">
      <h1 className="total-member-count">{this.state.memberCount + ' Members'}</h1>
    </footer>

    </li>
    )
  }
}

export default ServerExploreItem;