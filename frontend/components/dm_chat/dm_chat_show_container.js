import { connect } from 'react-redux';
import DmChatShow from './dm_chat_show';
import { fetchDms, receiveDm } from '../../actions/dm_message_actions';

const msp = (state, ownProps) => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  chat: state.entities.chats[ownProps.match.params.chat_id],
  dms: Object.values(state.entities.dms),
  chatId: ownProps.match.params.chat_id,
  friendships: state.entities.friendships,
})

const mdp = (dispatch) => ({
  fetchDms: (chatId) => dispatch(fetchDms(chatId)),
  receiveDm: (dm) => dispatch(receiveDm(dm))
})

export default connect(msp, mdp)(DmChatShow)