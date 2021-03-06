import { RECEIVE_ALL_CHATS, RECEIVE_CHAT } from '../actions/dm_chat_channel_actions';

const DmChatReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHATS:
      return action.chats;
    case RECEIVE_CHAT:
      return Object.assign({}, state, { [action.chat.id]: {id: action.chat.id, friendship_id: action.chat.friendship_id, friendship: action.friendship} });
    default:
      return state;
  }
}

export default DmChatReducer