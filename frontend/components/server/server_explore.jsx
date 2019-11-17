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
    return (
      <div className="server-explore-container">
        <h1 className="server-explore-header" >Find and Join a Server!</h1>
      <ul className="server-explore-list" >
        {this.props.servers.map((server) => {
          if (!this.props.memberedServerIds.includes(server.id)) {
          return (
            <ServerExploreItemContainer key={server.id} server={server}/>
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