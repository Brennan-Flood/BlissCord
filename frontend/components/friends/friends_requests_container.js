import { connect } from 'react-redux';
import FriendRequests from './friends_requests';
import { fetchFriendships, deleteFriendship, acceptFriendship } from '../../actions/friendship_actions';
import { fetchUsers } from '../../actions/user_actions';
 
const msp = (state) => ({
  friendships: state.entities.friendships,
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users,
})

const mdp = (dispatch) => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteFriendship: (id) => dispatch(deleteFriendship(id)),
  acceptFriendship: (id) => dispatch(acceptFriendship(id))
 })

export default connect(msp, mdp)(FriendRequests)