import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';
import channels from './channels_reducer';

export default combineReducers({
  users,
  servers,
  channels,
});
