import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions';

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  let membership;
  let nextState;
  let serverId;
  switch (action.type) {
    case RECEIVE_SERVER_MEMBERSHIP:
      nextState = Object.assign({}, state);
      membership = action.serverMembership
      serverId = membership.server_id
      nextState[serverId].members = {[membership.member_id]: membership}
      return nextState;
    case REMOVE_SERVER_MEMBERSHIP:
      nextState = Object.assign({}, state);
      serverId = action.serverMembership.server_id
      delete nextState[serverId];
      return nextState;
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      nextState = Object.assign({}, state, {[action.server.id]: action.server});
      return nextState;
    case REMOVE_SERVER:
      nextState = Object.assign({}, state);
      delete nextState[action.serverId];
      return nextState;
    default: 
      return state;
  }
}

export default ServersReducer