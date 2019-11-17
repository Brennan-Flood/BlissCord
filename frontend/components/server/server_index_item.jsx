import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: true, loading: false}
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
      <li className="server-icon" id={this.props.server.id} >
          <Link className="server-show-link" to={`/home/server/${this.props.server.id}`}>
            <h1 className="server-initials">{serverInitials}</h1>
          </Link>
        
        
        <div className="server-index-item-hover">
          <p className="server-index-item-hover-name arrow_box">{this.props.server.name}</p>
          <h1></h1>
        </div>
        
      </li>
     
      
    )
  }
}

export default ServerIndexItem;