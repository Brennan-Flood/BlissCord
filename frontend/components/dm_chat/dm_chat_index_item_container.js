import { connect } from 'react-redux';
import DmChatIndexItem from './dm_chat_index_item';
import { fetchFriendship } from '../../actions/friendship_actions';

const msp = (state) => ({
  friendships: state.entities.friendships,
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  fetchFriendship: (id) => dispatch(fetchFriendship(id))
})

export default connect(msp, mdp)(DmChatIndexItem)