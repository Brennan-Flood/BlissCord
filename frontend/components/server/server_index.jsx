import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';
import ServerCreateFormContainer from './server_form/server_create_form_container'
import ServerForm from './server_form/server_form';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.creatingServer = false;
    this.toggleHide = this.toggleHide.bind(this);
    this.state = {hide: true};
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  toggleHide() {
    this.setState({hide: !this.state.hide})
  }

  

  render() {
    let { servers } = this.props;
    return (
    <div className="server-index-container">
      <ul className="server-list">
      {servers.map((server) => {
        return (
        <ServerIndexItem
         className="server-icon" 
         server={server} 
         />
         )})}
      <button className="create-server-button" onClick={this.toggleHide}>
            +
      </button>
      </ul>
      
     

        {!this.state.hide && <ServerCreateFormContainer/>}
    </div>)
  }
}

export default ServerIndex;