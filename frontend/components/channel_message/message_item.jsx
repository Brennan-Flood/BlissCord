import React from 'react'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayHeader: this.props.displayHeader}
  }

  parseDate(date) {
    let messageDate = new Date(date);
    let day = messageDate.getDate();
    let year = messageDate.getFullYear();
    let month = messageDate.getMonth();

    return `${month}/${day}/${year}`

  }

  render() {
    const header = () => {
      return (
      <header className="message-header">
        <h1 className="message-author"> {this.props.message.author.username} </h1>
        <h1 className="message-timestamp">{this.parseDate(this.props.message.created_at)}</h1>
      </header>
      )
    }
    return (
    
      <div className="message">
        {this.state.displayHeader && header()}
        <h1 className="message-body">{this.props.message.body}</h1>
      </div>
    )
  }
}

export default Message;