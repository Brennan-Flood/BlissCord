import React from 'react';
import { Link } from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', admin_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
      .then(() => this.props.toggleHide());
      
  }
 
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value}); 
  }


  render() {
    return (
      <div className="create-server-modal">

      <form onSubmit={this.handleSubmit} 
      className="create-server-form" 
      >
        <img className="create-server-background" src="/images/discord-logo.png" />
        <button className="create-server-cancel" onClick={this.props.toggleHide}>X</button>
        <h1 className="create-server-title">OH, ANOTHER SERVER HUH?</h1>

        <input 
        className="create-server-input"
        type="text"
        onChange={this.update('name')}
        value={this.state.name}
        placeholder='Enter a Server Name'
        />

        <button className="submit-server-button">Create Server</button>
      </form>
      </div>
    )
  }
}

export default ServerForm;