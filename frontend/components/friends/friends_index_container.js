import { connect } from 'react-redux';
import FriendIndex from './friends_index';
import { fetchFriendships } from '../../actions/friendship_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => ({
  users: state.entities.users
});

const mdp = (dispatch) => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(FriendIndex);
