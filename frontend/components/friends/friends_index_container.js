import { connect } from 'react-redux';
import FriendIndex from './friends_index';
import { fetchFriendships } from '../../actions/friendship_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchChats } from '../../actions/dm_chat_channel_actions';

const msp = (state, ownProps) => ({
  users: state.entities.users,
  friendships: state.entities.friendships,
  chats: state.entities.chats,
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchChats: () => dispatch(fetchChats()),
});

export default connect(msp, mdp)(FriendIndex);
