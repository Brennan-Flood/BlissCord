import * as ChannelMessageApiUtil from "../util/message_api_util";

export const RECEIVE_ALL_CHANNEL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_CHANNEL_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_CHANNEL_MESSAGE = "REMOVE_MESSAGE";

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_ALL_CHANNEL_MESSAGES,
    messages
  }
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_CHANNEL_MESSAGE,
    message
  }
};

const removeMessage = (message) => {
  return {
    type: REMOVE_CHANNEL_MESSAGE,
    messageId: message.id
  }
};

export const fetchMessages = (channelId) => dispatch => {
  return ChannelMessageApiUtil.fetchMessages(channelId)
    .then(messages => { dispatch(receiveMessages(messages))
    });
}

export const createChannelMessage = (message) => dispatch => {
  return ChannelMessageApiUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)));
}

export const deleteChannelMessage = (id) => dispatch => {
  return ChannelMessageApiUtil.deleteChannelMessage(id)
    .then(message => dispatch(removeMessage(message)));
}