export const fetchMessages = (channelId) => {
  return $.ajax({
    method: "GET",
    url: "api/channel_messages",
    data: { channelId }
  })
};

export const createMessage = message => (
  $.ajax({
    url: 'api/channel_messages',
    method: 'POST',
    data: { message }
  })
);

export const deleteMessage = id => (
  $.ajax({
    url: `api/channel_messages/${id}`,
    method: 'DELETE'
  })
);