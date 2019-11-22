import { RECEIVE_ALL_DMS, RECEIVE_DM } from '../actions/dm_message_actions';

const DmMessageReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_DMS:
      return action.dms;
    case RECEIVE_DM:
      return Object.assign({}, state, { [action.dm.id]: action.dm });
    default:
      return state;
  }
}

export default DmMessageReducer;