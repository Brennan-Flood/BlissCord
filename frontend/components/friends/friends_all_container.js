import { connect } from 'react-redux';
import FriendsAll from './friends_all';
import { fetchFriendships, deleteFriendship } from '../../actions/friendship_actions';
import { fetchUsers } from '../../actions/user_actions';
import { createChat } from '../../actions/dm_chat_channel_actions';

const msp = (state) => ({
  friendships: Object.values(state.entities.friendships),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteFriendship: (id) => dispatch(deleteFriendship(id)),
  createChat: (friendshipId) => dispatch(createChat(friendshipId))
})

export default connect(msp, mdp)(FriendsAll)