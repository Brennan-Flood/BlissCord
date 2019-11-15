import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import ChannelCreateForm from './channel_create';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel))
})

export default connect(msp, mdp)(ChannelCreateForm)