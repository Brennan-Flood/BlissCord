import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';

const msp = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId,
  channelId: ownProps.match.params.channelId,
  channel: state.entities.channels[ownProps.match.params.channelId]
})

const mdp = (dispatch) => ({
  fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId))
})

export default connect(msp, mdp)(ChannelShow)