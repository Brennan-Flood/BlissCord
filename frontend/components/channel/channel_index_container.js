import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';

const msp = (state, ownProps) => ({
  curentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels),
  serverId: ownProps.match.params.serverId
});

const mdp = (dispatch) => ({
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)), 
});

export default connect(msp, mdp)(ChannelIndex);