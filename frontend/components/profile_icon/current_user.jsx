import React from 'react';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rendered: false };
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props && this.props.currentUser.profile_icon !== undefined) {
      this.setState({ rendered: true });
    } 
  }

  render() {
    if (this.props.currentUser === undefined || this.props.currentUser.profile_icon === undefined) {
      return <div className="failed"></div>
    } else {
    return (
    <div className="current-user-bar"> 
      <img className="current-user-image" src={this.props.currentUser.profile_icon.image_url}/> 
      <h1 className="current-user-name">{this.props.currentUser.username}</h1>
      <button onClick={this.toggleHide}>^</button>
      <div className="icons-list">
        <img className="orange" src="images/orange.png"/>
        <img className="pink" src="images/pink.png" />
        <img className="purple" src="images/purple.png" />
        <img className="red" src="images/red.png" />
        <img className="yellow" src="images/yellow.png" /> 
        <img className="green" src="images/green.png" /> 
        <img className="blue" src="images/blue.png" /> 
      </div>
    </div>
    )
    } 
  }
}

export default CurrentUser;