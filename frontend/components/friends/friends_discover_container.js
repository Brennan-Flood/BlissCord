import { connect } from 'react-redux';
import FriendsDiscover from './friends_discover';
import { createFriendship } from '../../actions/friendship_actions';

const msp = (state) => ({
  users: state.entities.users,
  friendships: state.entities.friendships,
  currentUser: state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
  createFriendship: (friendship) => dispatch(createFriendship(friendship)),
})

export default connect(msp, mdp)(FriendsDiscover)