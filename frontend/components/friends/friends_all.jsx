import React from 'react';
import { Link } from 'react-router-dom';

class FriendsAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {freinds: false};
    this.removeFriend = this.removeFriend.bind(this);
    this.handleChat = this.handleChat.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate() {
    if (this.state.friends === false) {
      this.props.fetchFriendships();
      this.props.fetchUsers();
      if (this.props.friendships) {
        this.setState({ friends: true });
      }
    }
  }

  handleChat(id) {
    this.props.createChat(id);
  }

  removeFriend(id) {
    this.props.deleteFriendship(id);
    this.setState({friends: false});
  }

  render() {
    if (Object.values(this.props.users).length > 1) {
    let friendsList;
    let friend;
    if (this.props.friendships) {
      friendsList = Object.values(this.props.friendships).map((friendship) => {
        if (friendship.accepted === true) {
          if (friendship.initiator === this.props.currentUser.id) {
            friend = Object.assign({}, friendship, { otherUser: this.props.users[friendship.recipient] });
          } else {
            friend = Object.assign({}, friendship, { otherUser: this.props.users[friendship.initiator] });
          };
          return (
          <div key={friend.id} className="friends-list-item">
              <div className="friend-name">
              <img className="dm-index-icon" src={friend.otherUser.profile_icon.image_url} />
              <h1 className="friends-list-name">{friend.otherUser.username}</h1>
              </div>
              <button className="chat-button" onClick={() => this.handleChat(friendship.id)}><i className="fas fa-comments"></i></button>
              <button className="remove-friend-button" onClick={() => this.removeFriend(friend.id)}><i className="fas fa-user-times"></i></button>
          </div>
          )
        } else {
          return;
        }
      });

    };
    
    return (
      <div className="friends-all-container">
        <header className="friends-all-header">
          <i className="fas fa-users"></i>
          <h1  className="friends-all-title">Friends</h1>
        </header>

        <ul className="friends-list">
          { friendsList }
        </ul>
      </div>
    )} else {
      return (<div></div>)
    }
  }
}

export default FriendsAll