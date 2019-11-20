import React from 'react'

class FriendsAll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends-all-container">
        <header className="friends-all-header">
          <img className="friends-all-image" src="images/all-friends.png"/>
          <h1  className="friends-all-title">Friends</h1>
        </header>
      </div>
    )
  }
}

export default FriendsAll