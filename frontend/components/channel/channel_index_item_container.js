import { connect } from 'react-redux';
import { deleteChannel } from '../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({

});

const mdp = (dispatch) => ({
  deleteChannel: (serverId, channelId) => dispatch(deleteChannel(serverId, channelId))
});

export default withRouter(connect(msp, mdp)(ChannelIndexItem))
