import React from 'react';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rendered: false, hidden: true };
    this.toggleHide = this.toggleHide.bind(this);
    this.changeProfile = this.changeProfile.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props && this.props.currentUser.profile_icon !== undefined) {
      this.setState({ rendered: true });
    } 
  }

  changeProfile(imageUrl) {
    let profileIcon = this.props.currentUser.profile_icon;
    profileIcon.image_url = imageUrl;
    this.props.updateProfile(profileIcon);
    this.toggleHide();
  }

  toggleHide() {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    if (this.props.currentUser === undefined || this.props.currentUser.profile_icon === undefined) {
      return <div className="failed"></div>
    } else {
    return (
    <div className="current-user-bar"> 
        <button><img className="current-user-image" onClick={this.toggleHide} src={this.props.currentUser.profile_icon.image_url} /></button>
      <h1 className="current-user-name">{this.props.currentUser.username}</h1>
      
      { !this.state.hidden && <div className="icons-list">
          <button className="change-profile-button" onClick={() => this.changeProfile("images/orange.png")}><img className="orange" src="images/orange.png"/></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/pink.png")}><img className="pink" src="images/pink.png" /></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/purple.png")}><img className="purple" src="images/purple.png" /></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/red.png")}><img className="red" src="images/red.png" /></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/yellow.png")}><img className="yellow" src="images/yellow.png" /></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/green.png")}><img className="green" src="images/green.png" /></button>
          <button className="change-profile-button" onClick={() => this.changeProfile("images/blue.png")}><img className="blue" src="images/blue.png" /></button>
      </div> }
    </div>
    )
    } 
  }
}

export default CurrentUser;