import React from 'react'

class FriendsDiscover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends-all-container">
        <div className="friends-all-container">
          <header className="friends-all-header">
            <img className="friends-all-image" src="images/all-friends.png" />
            <h1 className="friends-all-title">Discover Friends</h1>
          </header>
        </div>
      </div>
    )
  }
}

export default FriendsDiscover;