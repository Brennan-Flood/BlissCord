import { RECEIVE_ALL_CHANNEL_MESSAGES, RECEIVE_CHANNEL_MESSAGE, REMOVE_CHANNEL_MESSAGE } from '../actions/channel_message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';

const ChannelMessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNEL_MESSAGES:
      return action.messages;
    case RECEIVE_CHANNEL_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message });
    case REMOVE_CHANNEL_MESSAGE:
      let nextState = Object.assign({}, state);
      delete nextState[action.message.id];
      return nextState;
    default:
      return state;
  }
}

export default ChannelMessagesReducer