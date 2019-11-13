import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../../actions/server_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  createServer: server => dispatch(createServer(server))
})

export default connect(msp, mdp)(ServerForm);