import React from 'react'

class FriendsDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
  }

  handleFriend(id) {
    return this.props.createFriendship({initiator: this.props.currentUser.id, recipient: id});
  }

  render() {

    let myFriends = Object.values(this.props.friendships).map((friendship) => {
      if (friendship.recipient !== this.props.currentUser.id) {
        return friendship.recipient;
      } else {
        return friendship.initiator;
      }
    })

    let users = Object.values(this.props.users).map((user) => {
      if (!myFriends.includes(user.id) && user.id !== this.props.currentUser.id) {
      return (
        <div key={user.id} className="user-discover-item">
          <h1 className="user-discover-name">{user.username}</h1>
          <button onClick={() => this.handleFriend(user.id)} className="user-discover-button">Add User</button>
        </div>
      ) 
      } else {
        return;
      }
    })
    return (
      <div className="friends-all-container">
        <div className="friends-all-container">
          <header className="friends-all-header">
            <i className="fas fa-search"></i>
            <h1 className="friends-all-title">Discover Friends</h1>
          </header>
        </div>

        <div className="user-discovery">
          {users}
        </div>
      </div>
    )
  }
}

export default FriendsDiscover;