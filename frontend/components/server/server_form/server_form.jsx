import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', admin_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.createServer(this.state);
  }
 
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value}); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-server-form" >
        <h1>Create a New Server</h1>

        <input 
        className="create-server-input"
        type="text"
        onChange={this.update('name')}
        value={this.state.name}
        placeholder='name'
        />

        <button className="create-server-button">Create Server</button>
      </form>
    )
  }
}

export default ServerForm;