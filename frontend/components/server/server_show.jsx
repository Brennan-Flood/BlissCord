import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import ChannelIndexContainer from '../channel/channel_index_container';
import EditServerForm from './server_form/server_edit_form_container'

class ServerShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hide: true, edit: false}
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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

  toggleEdit() {
    this.setState({edit: !this.state.edit})
    if (this.state.hide !== true) {
      this.toggleHide()
    }
  }

  render() {
    if (!this.props.server) {
      return null;
    };

    const serverOptions = (
      <div className="server-options">
        <button className="delete-server-button" onClick={this.handleDelete}>
          Delete Server
        </button>

        <button className="edit-server-button" onClick={this.toggleEdit}>
          Edit Server
        </button>
          
        
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
        <ChannelIndexContainer serverId={this.props.server.id}/>
        { this.state.hide || serverOptions }  
        {this.state.edit && <EditServerForm toggleEdit={this.toggleEdit} server={this.props.server}/>}
      </div>
    )
  }
}



export default ServerShow;