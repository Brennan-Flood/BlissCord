import { fetchServers } from '../../actions/server_actions';
import { connect } from 'react-redux';
import ServerExplore from './server_explore';

const msp = (state) => ({
  servers: Object.values(state.entities.servers),
  memberedServerIds: state.entities.users[state.session.id].server_ids
});

const mdp = (dispatch) => ({
  fetchServers: () => dispatch(fetchServers())
});

export default connect(msp, mdp)(ServerExplore)