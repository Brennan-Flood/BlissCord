export const fetchDms = (dm_chat_id) => {
  return $.ajax({
    url: 'api/dm_messages',
    data: { dm_chat_id }
  })
}