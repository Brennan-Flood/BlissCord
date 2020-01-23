import React from 'react';
import { Link } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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

  renderErrors() {
    let errors = this.props.errors;

    return(
      <ul>
        {errors.map((error, i) => (
          <li 
          key={`error-${i}`}>
          {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <img className="background-image" src="https://study-fi-public.s3.amazonaws.com/login-background.jpg"></img>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <h1 className="login-greeting">Welcome To Discord-Clone</h1>
            <h1 className="login-errors">{this.renderErrors()}</h1>
            <br/>
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-params"
                maxLength="25"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-params"  
              />
            </label>
            <br/>
            <input className={this.props.formType.toLowerCase() + '-button'} type="submit" value={this.props.formType} />
            <h1 className="session-link">{this.props.navLink}</h1>
            <Link to="/demologin"><h1 className="demo-link">Login as Demo-User</h1></Link>

          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
