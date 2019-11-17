import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';


const usersReducer = (state = {}, action) => {
  let userId;
  let nextState;
  let serverIds;
  let newIds;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SERVER_MEMBERSHIP:
      nextState = Object.assign({}, state);
      userId = action.serverMembership.member_id
      serverIds = nextState[userId].server_ids;
      serverIds.push(action.serverMembership.server_id)
      nextState[userId].server_ids = serverIds;
      return nextState;
    case REMOVE_SERVER_MEMBERSHIP:
      nextState = Object.assign({}, state)
      userId = action.serverMembership.member_id
      serverIds = nextState[userId].server_ids
      newIds = []
      serverIds.forEach((id) => {
        if (id !== action.serverMembership.server_id) {
          return newIds.push(id);
        }
      })
      nextState[userId].server_ids = newIds
      return nextState;
    case RECEIVE_SERVER:
      nextState = Object.assign({}, state);
      if (state[action.server.admin_id]) {
        nextState[action.server.admin_id].server_ids.push(action.server.id);
        return nextState;
      } else {
        return nextState;
      }
    case LOGOUT_CURRENT_USER: 
      nextState = Object.assign({}, state);
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
