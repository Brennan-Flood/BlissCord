import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link, Switch } from 'react-router-dom';
import ServerCreateFormContainer from './server_form/server_create_form_container'
import ServerForm from './server_form/server_form';
import ServerShowContainer from './server_show_container';
import { ProtectedRoute } from '../../util/route_util';
import ServerExploreContainer from './server_explore_container';

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
    // debugger;
    return (
    <div className="servers">
        <ul className="server-index-container">
      {servers.map((server) => {
        return (
        <ServerIndexItem
         key={server.id}
         className="server-icon" 
         server={server} 
         />
         )})}
      <button className="create-server-button" onClick={this.toggleHide}>
            +
      </button>
          <Link to="/home/explore/" > 
            <button className="explore-button"> 
              <img src="images/search.png" alt=""/> 
            </button>
          </Link>
          
      
      </ul>
      
        {!this.state.hide && <ServerCreateFormContainer toggleHide={this.toggleHide}/>}

        <Switch>
        <ProtectedRoute path={'/home/explore'} component={ServerExploreContainer} />
        <ProtectedRoute path={`/home/server/:serverId`} component={ServerShowContainer} />
        </Switch> 
    </div>)
  }
}

export default ServerIndex;