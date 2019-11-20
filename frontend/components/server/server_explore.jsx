import React from 'react';
import ServerExploreItemContainer from './server_explore_item_container'
class ServerExplore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    let memberCount;
    return (
      <div className="server-explore-container">
        <h1 className="server-explore-header" >Find and Join a Server!</h1>
      <ul className="server-explore-list" >
        {this.props.servers.map((server) => {
          if (!this.props.memberedServerIds.includes(server.id)) {
            if (server.members) {
            console.log(Object.entries(server.members).length);
            memberCount = (Object.entries(server.members).length ? Object.entries(server.members).length : 0);
            } else {
            memberCount = 0;
            }
          return (
            <ServerExploreItemContainer key={server.id} server={server} memberCount={memberCount}/>
          )} else {
            return null;
          }
        })}
      </ul>
      </div>
    )
  }
}

export default ServerExplore;