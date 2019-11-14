import { connect } from 'react-redux';
import { fetchServer, updateServer, deleteServer } from '../../actions/server_actions';
import ServerShow from './server_show';

const msp = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
  // serverId: ownProps.match.params.serverId,
});

const mdp = (dispatch) => ({
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)) 
});

export default connect(msp, mdp)(ServerShow);