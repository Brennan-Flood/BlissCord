import React from 'react'

class DmMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayHeader: this.props.displayHeader }
  }

  parseDate(date) {
    let messageDate = new Date(date);
    let day = messageDate.getDate();
    let year = messageDate.getFullYear();
    let month = messageDate.getMonth();
    let hours = messageDate.getHours();
    let minutes = messageDate.getMinutes();
    let minutesZero;
    let calcedHours = hours % 12
    if ( calcedHours === 0) {
      calcedHours += 1
    } 
    (minutes < 10 ? minutesZero = "0" : minutesZero = "")
    let half;
    (hours > 12 ? half = 'PM' : half = 'AM');
    return `${month}/${day}/${year} at ${calcedHours}:${minutes}${minutesZero} ${half}`

  }

  render() {
    const header = () => {
      return (
        <header className="message-header">
          <h1 className="message-author"> {this.props.username.username} </h1>
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

export default DmMessage;