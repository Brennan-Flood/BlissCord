import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import FriendsAllContainer from './friends_all_container';
import FriendsDiscoverContainer from './friends_discover_container';
import FriendRequestsContainer from './friends_requests_container';
import { Switch, Link } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
    .then(() => this.props.fetchFriendships())

  }

  render() {
    return (
      <div className="friends">
        <div className="friends-index-container">
          <div className="friends-index-container-header">
            <input className="friendship-searchbar" type="text" placeholder="Find or start a conversation"/>
          </div>

          <ul className="friendship-index-nav">
            <Link to="/home/friends/all"><li className="all-friends-link">All Friends</li></Link>
            <Link to="/home/friends/requests"><li className="friend-requests-link">Friend requests</li></Link>
            <Link to="/home/friends/discover"><li className="find-friends-link">Find Friends</li></Link>
          </ul>
          <div className="dm-index-container">
            <header className="dm-index-header">
              <h1 className="dm-title">Direct Messages</h1>
              <h1 className="create-group-dm-button">+</h1>
            </header>

            <ul className="dm-index">

            </ul>
          </div>
        </div>
          {/* <div className="friends-show"> */}
          <Switch>

            <ProtectedRoute path="/home/friends/all" component={FriendsAllContainer} users={this.props.users} friendship={this.props.friendships}/>

          <ProtectedRoute path="/home/friends/requests" component={FriendRequestsContainer} users={this.props.users} friendships={this.props.friendships}/>

          <ProtectedRoute path="/home/friends/discover" component={FriendsDiscoverContainer}/>

            {/* <ProtectedRoute path="/home/friends/chat" component={}/> */}

            </Switch>
          {/* </div> */}
        
      </div>
    )
  }
}

export default FriendIndex;