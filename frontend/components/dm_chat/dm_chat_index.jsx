import React from 'react';
import DmChatIndexItemContainer from './dm_chat_index_item_container';

class DmChatIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ready: false}
  }

  componentDidMount() {
    this.props.fetchChats();
  }


  render() {
    let chats = this.props.chats.map((chat) => {
      return <DmChatIndexItemContainer key={chat.id} chat={chat} />
    })
    return (
      <ul className="dm-chat-index">
        {chats}
      </ul>
    )
  }
}

export default DmChatIndex;