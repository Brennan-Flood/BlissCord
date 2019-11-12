import { connect } from 'react-redux';
import { fetchServers } from '../../actions/server_actions';
import { logout } from '../../actions/session_actions';
import ServerIndex from './server_index'


const msp = (state) => ({
  curentUser: state.entities.users[state.session.id],
  servers: Object.values(state.entities.servers)
})

const mdp = (dispatch) => ({
  fetchServers: () => dispatch(fetchServers()),
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(ServerIndex)