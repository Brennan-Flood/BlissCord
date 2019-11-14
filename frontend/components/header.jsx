import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <header className="main-header">
      <Link to="/home" >
        <h1 className="header-link" >Discord Clone</h1>
      </Link>
      
        {!this.props.currentUser || 
        <Link to="/" onClick={this.props.logout}>
          <img className="logout-image" src="/images/logout.png" alt=""/>
        </Link>
        }
        
    </header>
    )
  }
}

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Header);