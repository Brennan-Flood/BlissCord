export const fetchChannels = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/channels`
  })
}

export const fetchChannel = (serverId, channelId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/channels/${channelId}`
  })
}

export const createChannel = (serverId, channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${serverId}/channels`,
    data: { channel }
  })
}

export const updateChannel = (serverId, channel) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/servers/${serverId}/channels/${channel.id}`,
    data: { channel }
  })
}

export const deleteChannel = (serverId, channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${serverId}/channels/${channelId}`
  })
}