import * as DmChatUtil from '../util/dm_chat_util'; 

export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

const receiveAllChats = (chats) => ({
  type: RECEIVE_ALL_CHATS,
  chats
})

const receiveChat = (chat, friendship) => ({
  type: RECEIVE_CHAT,
  chat,
  friendship
})

export const fetchChats = () => (dispatch) => {
  return DmChatUtil.fetchChats()
  .then(chats => dispatch(receiveAllChats(chats)))
}

export const createChat = (friendship) => (dispatch) => {
  return DmChatUtil.createChat(friendship.id)
  .then(chat => dispatch(receiveChat(chat, friendship)))
}