export const fetchChats = () => {
  return $.ajax({
    url: '/api/dm_chat_channels'
  })
}

export const createChat = (friendship_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/dm_chat_channels',
    data: { dm_chat_channel: {friendship_id} }
  })
}