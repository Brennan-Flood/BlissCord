import React from 'react'

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends-all-container">
        <header className="friends-all-header">
          <img className="friends-all-image" src="images/all-friends.png"/>
          <h1 className="friends-all-title">Friend Requests</h1>
        </header>
      </div>
    )
  }
}

export default FriendRequests;