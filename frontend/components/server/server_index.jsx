import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link, Switch } from 'react-router-dom';
import ServerCreateFormContainer from './server_form/server_create_form_container'
import ServerShowContainer from './server_show_container';
import { ProtectedRoute } from '../../util/route_util';
import ServerExploreContainer from './server_explore_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.creatingServer = false;
    this.toggleHide = this.toggleHide.bind(this);
    this.state = {hide: true, searchOn: false};
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  toggleHide() {
    this.setState({hide: !this.state.hide})
  }

  toggleSearch() {
    this.setState({searchOn: !this.state.searchOn});
  }

  render() {
    let { servers } = this.props;
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
          
            <button 
            onMouseEnter={this.toggleSearch} 
            onMouseLeave={this.toggleSearch} 
            className="explore-button">

              {this.state.searchOn ||
                <img className="explore-image"
                  src="images/search-off.png"
                />} 

              {!this.state.searchOn || 
              <img className="explore-image" 
              src="images/search-on.png" 
              />} 

            </button>
          </Link>
          
      
      </ul>
      
        {!this.state.hide && <ServerCreateFormContainer toggleHide={this.toggleHide}/>}

        <Switch>

        <ProtectedRoute 
          path={'/home/explore'} 
          component={ServerExploreContainer} 
          />

        <ProtectedRoute 
          path={`/home/server/:serverId`} 
          component={ServerShowContainer} 
          />

        </Switch> 
    </div>)
  }
}

export default ServerIndex;