import { login } from '../../actions/session_actions';
import DemoLoginForm from './demo_login_form';
import { connect } from 'react-redux';

const msp = (state) => ({
  demoUser: {username: 'Guest', password: 'Password'}
})

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
})

export default connect(msp, mdp)(DemoLoginForm)