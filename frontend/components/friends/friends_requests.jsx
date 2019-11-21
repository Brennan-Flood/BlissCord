import React from 'react'

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {requestedFriends: null};
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUsers();
  // }

  handleAccept(id) {
    this.props.acceptFriendship(id);
  }

  handleDecline(id) {
    this.props.deleteFriendship(id);
  }

  componentDidUpdate() {
    if (this.state.requestedFriends === null && this.props.friendships === {} ) {
      this.props.fetchFriendships();
      // this.props.fetchUsers();
      if (this.props.friendships) {
      this.setState({requestedFriends: true});
      }
    }
  }


  render() {
    let requestsList;
    let friend;
    if (this.props.friendships) {
      requestsList = Object.values(this.props.friendships).map((friendship) => {
            if (friendship.accepted === false) {
              if (friendship.initiator === this.props.currentUser.id) {
                // friend = Object.assign({}, friendship, { otherUser: this.props.users[friendship.recipient] });
                return;
              } else {
                friend = Object.assign({}, friendship, { otherUser: this.props.users[friendship.initiator] });
              };
              return (
                <div key={friend.id} className="friend-request-item">
                  <h1 className="friend-request-name"> {friend.otherUser.username} </h1>
                  <div className="request-options">
                    <button onClick={() => this.handleAccept(friend.id)} className="accept-request-button">Accept</button>
                    <button onClick={() => this.handleDecline(friend.id)} className="decline-request-button">Decline</button>
                  </div>
                </div>)
            } else {
              return;
            }
          });

      };
    
  

    return (
      <div className="friends-all-container">
        <header className="friends-all-header">
          <img className="friends-all-image" src="images/all-friends.png"/>
          <h1 className="friends-all-title">Friend Requests</h1>
        </header>

        <div className="friend-requests">
          { requestsList }
        </div>
      </div>
    )
  } 
}

export default FriendRequests;