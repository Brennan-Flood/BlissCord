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
    <div>
      <header className="logout-button">
          <Link to="/"><button onClick={this.props.logout}>logout</button></Link>
      </header>
      <h1>Server Index</h1>
      <ul>
      {servers.map((server) => {
        return ( <li key={server.id}><ServerIndexItem
         className="server-icon" 
         server={server} 
         />
        </li> 
         )})}
      </ul>
      
      <button onClick={this.toggleHide}>
        Create Server
      </button>
        {!this.state.hide && <ServerCreateFormContainer/>}
    </div>)
  }
}

export default ServerIndex;