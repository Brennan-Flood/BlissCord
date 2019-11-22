import * as DmChatUtil from '../util/dm_chat_util'; 

export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

const receiveAllChats = (chats) => ({
  type: RECEIVE_ALL_CHATS,
  chats
})

const receiveChat = (chat) => ({
  type: RECEIVE_CHAT,
  chat
})

export const fetchChats = () => (dispatch) => {
  return DmChatUtil.fetchChats()
  .then(chats => dispatch(receiveAllChats(chats)))
}

export const createChat = (friendshipId) => (dispatch) => {
  return DmChatUtil.createChat(friendshipId)
  .then(chat => dispatch(receiveChat(chat)))
}