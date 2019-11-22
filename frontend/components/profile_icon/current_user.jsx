import React from 'react';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rendered: false}
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props && this.props.currentUser.profile_icon !== undefined) {
      this.setState({rendered: true})
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
    </div>
    )
    } 
  }
}

export default CurrentUser;