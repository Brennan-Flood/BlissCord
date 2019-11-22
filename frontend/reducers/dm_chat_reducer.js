import { RECEIVE_ALL_CHATS, RECEIVE_CHAT } from '../actions/dm_chat_channel_actions';

const DmChatReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHATS:
      return action.chats;
    case RECEIVE_CHAT:
      return Object.assign({}, state, { [action.chat.id]: action.chat });
    default:
      return state;
  }
}

export default DmChatReducer