import React from 'react';
import { ProtectedRoute } from '../../util/route_util';


class ServerShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hide: true}
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
    this.props.fetchServer(this.props.match.params.serverId);
    this.setState({hide: true})
    }
  }

  handleDelete() {
    this.props.deleteServer(this.props.server.id)
      .then(() => this.props.history.push('/home'));
  }

  toggleHide() {
    this.setState({hide: !this.state.hide});
  }

  render() {
    if (!this.props.server) {
      return null;
    };

    const serverOptions = (
      <div className="server-options">
        <button className="delete-server-button" onClick={this.handleDelete}>Delete Server</button>
      </div>
    )

    return (
      <div className="server-show-container">
        <div className="server-header">
          <h1 className="server-main-name">{this.props.server.name} </h1>
          {!this.state.hide || <button onClick={this.toggleHide} className="server-options-dropdown-button">v</button> }
          {this.state.hide  || <button onClick={this.toggleHide} className="server-options-dropdown-button">x</button> }
        </div>

        <h1 className="channel-header">Text Channels</h1>
        { this.state.hide || serverOptions }  

      </div>
    )
  }
}



export default ServerShow;