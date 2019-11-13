import React from 'react';

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
      <li className="server-icon">
        <h1 className="server-initials">{serverInitials}</h1>
        <h1 className="server-title">{this.props.server.title}</h1>
      </li>
    )
  }
}

export default ServerIndexItem;