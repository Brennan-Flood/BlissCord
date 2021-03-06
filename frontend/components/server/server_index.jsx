import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link, Switch } from 'react-router-dom';
import ServerCreateFormContainer from './server_form/server_create_form_container'
import ServerShowContainer from './server_show_container';
import { ProtectedRoute } from '../../util/route_util';
import ServerExploreContainer from './server_explore_container';
import FriendsIndexContainer from '../friends/friends_index_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.creatingServer = false;
    this.toggleHide = this.toggleHide.bind(this);
    this.state = {hide: true, searchOn: false, updatePending: false, friendsOn: false, logoutOn: false};
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
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

  render() {
    let { servers } = this.props;
    return (
    <div className="servers">
        <ul className="server-index-container">
          <Link to="/home/friends/">
            <button 
              className="friends-button"
            >
              <i className="fas fa-users"></i>
              <div className="friends-label">
                <p className="friends-label-text arrow_box">Friends</p>
              </div>
            </button>
          </Link>

          <Link to="/home/explore/" >
            <button
              className="explore-button">
              <i className="fas fa-search"></i>
              <div className="explore-label">
                <p className="explore-label-text arrow_box">Explore</p>
              </div>
            </button>
          </Link>

          <button className="create-server-button" onClick={this.toggleHide}>
            <h1 className="create-server-button-symbol"> +</h1>
            <div className="server-index-item-hover">
              <p className="server-index-item-hover-name arrow_box" >Create a Server</p>
            </div>
          </button>
          
          <button
            className="logout" 
            onClick={this.handleLogout}
          > 
            <i className="fas fa-sign-out-alt"></i>
            <div className="logout-label">
              <p className="logout-label-text arrow_box">Logout</p>
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

        <ProtectedRoute
          path={`/home/friends`}
          component={FriendsIndexContainer}
        />

        </Switch> 
        {!this.state.hide && <ServerCreateFormContainer toggleHide={this.toggleHide} />}
    </div>)
  }
}

export default ServerIndex;