import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';
import channels from './channels_reducer';
import channelMessages from './channel_messages_reducer';
import friendships from './friendships_reducer';
import dms from './dm_message_reducer';
import chats from './dm_chat_reducer';

export default combineReducers({
  users,
  servers,
  channels,
  channelMessages,
  friendships,
  dms,
  chats,
});
