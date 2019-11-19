import React from 'react';
import Message from '../channel_message/message_item';
class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", 
      author_id: this.props.currentUser.id, 
      channel_id: this.props.channelId
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.serverId, this.props.channelId);
    this.props.fetchChannelMessages(this.props.channelId);
  }

  update(e) {
    this.setState({body: e.target.value})
  }

  sendMessage() {
    this.props.createChannelMessage(this.state)
    this.setState({body: ""})
  }

  render() {
    let displayHeader = true
    let prevId;
    let createdAt;
    let prevCreatedAt;
    let authorName;
    if (this.props.channel) {
    return (
      <div className="channel-show">
        <header className="channel-show-header">
        <h1 className="channel-show-bullet">#</h1>
        <h2 className="channel-show-name">{this.props.channel.name}</h2>
        </header>

        <div className="message-index">
          {this.props.channelMessages.map((message) => {
            if (message) {
              if(prevId === message.author_id ) {
                displayHeader = false;
              } else {
                displayHeader = true;
              }
              prevCreatedAt = createdAt;
              createdAt = message.created_at;
              prevId = message.author_id;
              
              return ( <Message prevCreatedAt={prevCreatedAt} displayHeader={displayHeader} key={message.id} message={message} /> )
            }
          })}

          
        </div>
        
        <footer className="message-footer">
          <form className="message-form" onSubmit={this.sendMessage}>
            <input placeholder={`Message ${this.props.channel.name}`}
              className="message-input"
              type="text"
              onChange={this.update}
              value={this.state.body} />

            <button>></button>
          </form>
        </footer>

      </div>
    )} else {
      return <h1>loading</h1>
    } 


  } 
}

export default ChannelShow;