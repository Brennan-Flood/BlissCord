import { connect } from 'react-redux';
import { fetchServer, updateServer, deleteServer } from '../../actions/server_actions';
import ServerShow from './server_show';
import { deleteServerMembership } from '../../actions/server_membership_actions';

const msp = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)),
  deleteServerMembership: (serverMembership) => dispatch(deleteServerMembership(serverMembership))
});

export default connect(msp, mdp)(ServerShow);