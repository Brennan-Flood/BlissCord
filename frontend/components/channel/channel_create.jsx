import React from 'react';

class ChannelCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', server_id: this.props.serverId, admin_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.props.serverId, this.state)
      .then(() => this.setState({name: ''}))
      .then(() => this.props.toggleHide())
  }

  render() {
    // console.log(this.props)
    return (
      <div className="channel-create-background">
        <form className='channel-create-form' onSubmit={this.handleSubmit}>
          <button onClick={this.props.toggleHide} className="channel-cancel">X</button>
          <h1 className="channel-create-title" >ADD A CHANNEL</h1>
          <input className="channel-input" 
            type="text" 
            onChange={this.update('name')} 
            value={this.state.name}
            placeholder="CHANNEL NAME"
            maxLength="35"
          />

          <button className="channel-submit" >CREATE YOUR CHANNEL</button>
        </form>
      </div>
    )
  }
}

export default ChannelCreateForm;