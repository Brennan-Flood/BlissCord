import React from 'react';
import Message from '../channel_message/message_item';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", 
      author_id: this.props.currentUser.id, 
      channel_id: this.props.channelId,
    };

    
    this.sendMessage = this.sendMessage.bind(this);
    this.update = this.update.bind(this);
    this.getCurrentChannel = this.getCurrentChannel.bind(this);
  }

  componentDidMount() {
    let receiveMessage = this.props.receiveMessage.bind(this);
    this.props.fetchChannelMessages(this.getCurrentChannel());
    let currentChannel = App.cable.subscriptions.create(
      { channel: "ChannelChannel", currentchannelId: this.getCurrentChannel()},
        {
          received: data => {
            if (data.channel_id === this.state.channel_id) {
            receiveMessage(data);
            }
          },
          speak: function (data) {

            return this.perform("speak", data);
          }
        }
    );
    this.setState({currentChannel: currentChannel})
    this.updateScroll();
  }

  getCurrentChannel() {
    let url = window.location.href.split('channel').slice(1);
    if (url[0]) {
      let integer = parseInt(url[0].split('/').slice(1)[0]);
      return integer;
    } else {
      return -1;
    }
  }

  componentDidUpdate() {
    if (this.state.channel_id !== this.getCurrentChannel()) {
      let receiveMessage = this.props.receiveMessage.bind(this);
      this.setState({channel_id: this.getCurrentChannel()})
      this.props.fetchChannel(this.props.serverId, this.state.channel_id);
      this.props.fetchChannelMessages(this.getCurrentChannel());
      
      let currentChannel = App.cable.subscriptions.create(
        { channel: "ChannelChannel", currentchannelId: this.getCurrentChannel() },
        {
          received: data => {
            if (data.channel_id === this.state.channel_id) {
            receiveMessage(data);
            }
          },
          speak: function (data) {

            return this.perform("speak", data);
          }
        }
      );
      this.setState({currentChannel: currentChannel});

    }
    this.updateScroll();

  }

  update(e) {
    this.setState({body: e.target.value})
  }

  updateScroll(){
    let index = document.getElementById("message-index");
    if (index) {
    index.scrollTop = index.scrollHeight;
    }
  }

  sendMessage(e) {
    e.preventDefault();
    
    this.state.currentChannel.speak({
      body: this.state.body, 
      channel_id: this.state.channel_id,
      author_id: this.state.author_id
    });

    this.setState({body: ""});
  }

  render() {
    let displayHeader = true
    let prevId;
    let createdAt;
    let prevCreatedAt;
    let username;

    if (this.props.channel) {
    return (
      <div className="channel-show">
        <header className="channel-show-header">
        <h1 className="channel-show-bullet">#</h1>
        <h2 className="channel-show-name">{this.props.channel.name}</h2>
        </header>

        <div id="message-index" className="message-index">
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
              username = {username: this.props.users[message.author_id].username}
              return (<Message image_url={this.props.users[message.author_id].profile_icon.image_url} username={username} prevCreatedAt={prevCreatedAt} displayHeader={displayHeader} key={message.id} message={message} /> )
            }
          })}

          
        </div>
        
        <footer className="message-footer">
          <form className="message-form" onSubmit={this.sendMessage}>
            <input placeholder={`Message #${this.props.channel.name}`}
              className="message-input"
              type="text"
              onChange={this.update}
              value={this.state.body} />

            <button></button>
          </form>
        </footer>

      </div>
    )} else {
      return <h1>loading</h1>
    } 


  } 
}

export default ChannelShow;