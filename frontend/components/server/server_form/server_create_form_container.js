import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom'

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  createServer: server => dispatch(createServer(server))
})

export default withRouter(connect(msp, mdp)(ServerForm));