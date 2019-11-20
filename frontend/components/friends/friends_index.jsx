import React from 'react';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="friends">
        <div className="friends-index-container">
          <div className="friends-index-container-header">
            <h1 className="friendships-title">Friendships</h1>
          </div>

          <ul className="friendship-index-nav">
            <li className="all-friends-link">All Friends</li>
            <li className="friend-requests-link">Friend requests</li>
            <li className="find-friends-link">Find Friends</li>

          </ul>
        </div>
      </div>
    )
  }
}

export default FriendIndex;