export const fetchChannelMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: "api/channel_messages",
    data: { channel_id: channelId }
  })
};

export const createChannelMessage = message => (
  $.ajax({
    url: 'api/channel_messages',
    method: 'POST',
    data: { message }
  })
);

export const deleteChannelMessage = id => (
  $.ajax({
    url: `api/channel_messages/${id}`,
    method: 'DELETE'
  })
);