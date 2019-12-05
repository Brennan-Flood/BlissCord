import React from 'react';
import { Link } from 'react-router-dom';

class DmChatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {otherUser: null}
  }

  componentDidMount() {
    this.props.fetchFriendship(this.props.chat.friendship_id);
  }

  render() {
    
    let friendship = this.props.friendships[this.props.chat.friendship_id]
    let otherUser;
    if (friendship && this.props.users[friendship.recipient] && this.props.users[friendship.initiator]) {
    otherUser = (friendship.recipient === this.props.currentUser.id ? this.props.users[friendship.initiator] : this.props.users[friendship.recipient])
    return (
      <Link to={`/home/friends/chat/${this.props.chat.id}`}>
        <li key={this.props.chat.id} className="dm-index-item">
          <h1 className="dm-index-name">{otherUser.username}</h1>
        </li>
      </Link>
    )

    } else {
      return (<div></div>)
    }
  }
}

export default DmChatIndexItem;