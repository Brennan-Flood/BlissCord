import React from 'react';


class DemoLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.demoUser.username,
      password: this.props.demoUser.password
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="login-form-container">
        <img className="background-image" src="/images/login-background.jpg"></img>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          <div className="login-form">
            <h1 className="login-greeting">Welcome To Discord-Clone</h1>
            <br />
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-params"
                disabled
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-params"
                disabled
              />
            </label>
            <br />
            <input className='login-button' type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default DemoLoginForm;