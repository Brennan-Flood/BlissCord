import React from 'react';
import DmIndexItem from './dm_index_item';

class DmChatShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      dm_chat_id: this.props.chatId,
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.update = this.update.bind(this);
    this.getCurrentChat = this.getCurrentChat.bind(this);
  }

  getCurrentChat() {
    let url = window.location.href.split('chat').slice(1);
    if (url[0]) {
      let integer = parseInt(url[0].split('/').slice(1)[0]);
      return integer;
    } else {
      return -1;
    }
  }

  componentDidMount() {
    this.props.fetchDms(this.props.chatId);
    let currentChannel = App.cable.subscriptions.create(
      { channel: "DmChatChannelChannel", currentchannelId: this.getCurrentChat() },
      {
        received: data => {
          if (data.dm_chat_id === this.state.dm_chat_id) {
            this.props.receiveDm(data);
          }
        },
        speak: function (data) {

          return this.perform("speak", data);
        }
      }
    );

    this.setState({ currentChannel: currentChannel })
    this.updateScroll();
  }

  componentDidUpdate() {
    if (this.props.chat && this.state.loaded === false) {
    this.props.fetchDms(this.props.chatId);
    this.setState({ loaded: true })
    }

    if (this.state.dm_chat_id !== this.getCurrentChat()) {
      let receiveDm = this.props.receiveDm.bind(this);
      this.setState({ dm_chat_id: this.getCurrentChat() })
      this.props.fetchDms(this.getCurrentChat());

      let currentChannel = App.cable.subscriptions.create(
        { channel: "DmChatChannelChannel", currentchannelId: this.getCurrentChat() },
        {
          received: data => {
            if (data.dm_chat_id === this.state.dm_chat_id) {
              receiveDm(data);
            }
          },
          speak: function (data) {

            return this.perform("speak", data);
          }
        }
      );
      this.setState({ currentChannel: currentChannel });

    }
    this.updateScroll();
  }

  update(e) {
    this.setState({ body: e.target.value })
  }

  updateScroll() {
    let index = document.getElementById("message-index");
    if (index) {
      index.scrollTop = index.scrollHeight;
    }
  }

  sendMessage(e) {
    e.preventDefault();
    this.state.currentChannel.speak({ body: this.state.body, dm_chat_id: this.state.dm_chat_id, author_id: this.state.author_id });
    this.setState({ body: "" });
  }

  render() {
    let displayHeader = true
    let prevId;
    let createdAt;
    let prevCreatedAt;
    let username;
    console.log(this.props)
    if (Object.values(this.props.users).length < 3) {
      return <div></div>
    }
    if (this.props.chat) {
      return (
        <div className="channel-show">
          <header className="channel-show-header">
            <h2 className="channel-show-name">{'@'}</h2>
          </header>

          <div id="message-index" className="message-index">
            {this.props.dms.map((message) => {
              if (message) {
                if (prevId === message.author_id) {
                  displayHeader = false;
                } else {
                  displayHeader = true;
                }
                prevCreatedAt = createdAt;
                createdAt = message.created_at;
                prevId = message.author_id;
                username = { username: this.props.users[message.author_id].username }
                return (<DmIndexItem username={username} prevCreatedAt={prevCreatedAt} displayHeader={displayHeader} key={message.id} message={message} />)
              }
            })}


          </div>

          <footer className="message-footer">
            <form className="message-form" onSubmit={this.sendMessage}>
              <input placeholder={`Message @`}
                className="message-input"
                type="text"
                onChange={this.update}
                value={this.state.body} />

              <button></button>
            </form>
          </footer>

        </div>
      )
    } else {
      return <h1>loading</h1>
    }


  }
}


export default DmChatShow;