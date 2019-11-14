import { fetchServers } from '../../actions/server_actions';
import { connect } from 'react-redux';
import ServerExplore from './server_explore';

const msp = (state) => ({
  servers: Object.values(state.entities.servers)
});

const mdp = (dispatch) => ({
  fetchServers: () => dispatch(fetchServers())
});

export default connect(msp, mdp)(ServerExplore)