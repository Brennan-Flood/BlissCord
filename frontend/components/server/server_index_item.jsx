import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: true}
  }

  render() {
    const serverWords = this.props.server.name.split(' ')
    let serverInitials = serverWords.map((word) => {
      return word.slice(0, 1)
    })
    if (serverInitials.length > 3) {
      serverInitials = serverInitials.slice(0, 3)
    }
    return (
      
      <li id={this.props.server.id} className="server-icon">
        <Link className="server-show-link" to={`/home/server/${this.props.server.id}`}>
        <h1 className="server-initials">{serverInitials}</h1>
        </Link>

        <div className="server-hover">
          {/* <h1 className="server-name">{this.props.server.name}</h1> */}
          <h1 className="server-name-tag"></h1>
          </div>
      </li>
     
    )
  }
}

export default ServerIndexItem;