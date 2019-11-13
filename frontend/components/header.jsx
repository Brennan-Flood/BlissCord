import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'

class Header extends React.Component {
  render() {
    return (
    <header className="main-header">
      <Link to="/home" >
        <h1 className="header-link" >Discord Clone</h1>
      </Link>
      
      <Link to="/"><button onClick={this.props.logout}>logout</button></Link>
        
    </header>
    )
  }
}

const msp = (state) => ({

})

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Header);