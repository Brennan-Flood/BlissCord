import { connect } from 'react-redux';
import DmChatIndex from './dm_chat_index';
import { fetchChats } from '../../actions/dm_chat_channel_actions';

const msp = (state) => ({
  chats: Object.values(state.entities.chats),
  // users: state.entities.users,
  // friendships: state.entities.friendships,
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  fetchChats: () => dispatch(fetchChats())
})

export default connect(msp, mdp)(DmChatIndex)