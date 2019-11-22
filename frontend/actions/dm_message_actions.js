import * as DmMessageUtil from '../util/dm_message_util';

export const RECEIVE_ALL_DMS = 'RECEIVE_ALL_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';

export const receiveDm = (dm) => ({
  type: RECEIVE_DM,
  dm
})

const receiveAllDms = (dms) => ({
  type: RECEIVE_ALL_DMS,
  dms
})

export const fetchDms = (dmChatId) => (dispatch) => {
  return DmMessageUtil.fetchDms(dmChatId)
  .then((dms) => dispatch(receiveAllDms(dms)))
}