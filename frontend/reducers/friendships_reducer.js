import { RECEIVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const FriendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDSHIPS:
      return action.friendships;
    case RECEIVE_FRIENDSHIP:
      nextState = Object.assign({}, state, {[action.friendship.id]: action.friendship});
      return nextState;
    default:
      return state;
  }
};

export default FriendshipsReducer;