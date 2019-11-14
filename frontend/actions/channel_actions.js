import * as ChannelUtil from '../util/channel_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
})

const receiveChannel = (channel)  => ({
  type: RECEIVE_CHANNEL,
  channel
})

const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  channelId
})

export const fetchChannels = (serverId) => (dispatch) => {
  return ChannelUtil.fetchChannels(serverId)
    .then(channels => dispatch(receiveAllChannels(channels)))
}

export const fetchChannel = (serverId, channelId) => (dispatch) => {
  return ChannelUtil.fetchChannel(serverId, channelId)
  .then(channel => dispatch(receiveChannel(channel)))
}

export const createChannel = (serverId, channel) => (dispatch) => {
  return ChannelUtil.createChannel(serverId, channel)
    .then(channel => dispatch(receiveChannel(channel)))
}

export const updateChannel = (serverId, channel) => (dispatch) => {
  return ChannelUtil.updateChannel(serverId, channel)
    .then(channel => dispatch(receiveChannel(channel)))
}

export const deleteChannel = (serverId, channelId) => (dispatch) => {
  return ChannelUtil.deleteChannel(serverId, channelId)
    .then(channelId => dispatch(removeChannel(channelId)))
}