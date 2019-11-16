// need to create the edit from and container

// can probably use the server_form similarly to how we did it on the test
import { updateServer } from '../../../actions/server_actions';
import React from 'react';
import { connect } from 'react-redux';

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.server;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateServer(this.state)
    this.props.toggleEdit();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  render() {
    return (
      <div className="create-server-modal">
      <form onSubmit={this.handleSubmit} className="create-server-form" >
        <button className="create-server-cancel" onClick={this.props.toggleHide}>X</button>
        <img className="create-server-background" src="/images/discord-logo.png" />
        <h1 className="create-server-title">Edit Server</h1>

        <input
          className="create-server-input"
          type="text"
          onChange={this.update('name')}
          value={this.state.name}
          placeholder='Enter a Server Name'
        />

        <button className="submit-server-button">Update Server</button>
      </form>
      </div>
    )
  }
}

const msp = (state) => ({

})

const mdp = (dispatch) => ({
  updateServer: (server) => dispatch(updateServer(server))
})

export default connect(msp, mdp)(ServerForm);