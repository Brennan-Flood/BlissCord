import React from 'react';

class ServerExplore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    return (
      <div>
        <h1>Find and Join a Server!</h1>
      <ul>
        {this.props.servers.map((server) => {
          return (
          <li key={server.id}>{server.name}</li>
          )
        })}
      </ul>
      </div>
    )
  }
}

export default ServerExplore;