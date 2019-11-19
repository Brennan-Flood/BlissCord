import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';
import { createChannelMessage, deleteChannelMessage, fetchChannelMessages } from '../../actions/channel_message_actions';

const msp = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId,
  channelId: ownProps.match.params.channelId,
  channel: state.entities.channels[ownProps.match.params.channelId],
  currentUser: state.entities.users[state.session.id],
  channelMessages: Object.values(state.entities.channelMessages),
  members: state.entities.servers[ownProps.match.params.serverId].members,
})

const mdp = (dispatch) => ({
  fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId)),
  fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
  createChannelMessage: (message) => dispatch(createChannelMessage(message)),
  deleteChannelMessage: (messageId) => dispatch(deleteChannelMessage(messageId))
})

export default connect(msp, mdp)(ChannelShow)