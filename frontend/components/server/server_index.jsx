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
    this.state = {hide: true, searchOn: false, updatePending: false};
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleJoin() {
    this.setState({updatePending: true});
    this.setState({updatePending: false});
  }

  componentDidMount() {
    this.props.fetchServers();
    this.props.fetchUsers();

  }

  toggleHide() {
    this.setState({hide: !this.state.hide})
  }

  toggleSearch() {
    this.setState({searchOn: !this.state.searchOn});
  }

  render() {
    let { servers } = this.props;
    // if ( !servers ) {
    //   return <h1>loading...</h1>
    // }
    
    return (
    <div className="servers">
        <ul className="server-index-container">

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

          <button className="create-server-button" onClick={this.toggleHide}>
            <h1 className="create-server-button-symbol"> +</h1>
            <div className="server-index-item-hover">
              <p className="server-index-item-hover-name arrow_box" >Create a Server</p>
            </div>
          </button>

              <h1 className="server-index-nav-end"></h1>
      {servers.map((server) => {
        if (this.props.memberedServerIds.includes(server.id)) {
          return (
        <ServerIndexItem
          key={server.id}
          className="server-icon" 
          server={server} 
         />
        )} else {
          return null
        }})}
      
          
      
      </ul>
      

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
        {!this.state.hide && <ServerCreateFormContainer toggleHide={this.toggleHide} />}

    </div>)
  }
}

export default ServerIndex;