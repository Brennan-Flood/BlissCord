import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom'
import { createChannel } from '../../../actions/channel_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  createServer: server => dispatch(createServer(server)),
  createChannel: (serverId, channel) => dispatch(createChannel),
})

export default withRouter(connect(msp, mdp)(ServerForm));