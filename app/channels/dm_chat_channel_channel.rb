class DmChatChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_for "dm_chat_channel_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = DmMessage.create(author_id: data['author_id'], body: data["body"], dm_chat_id: data['dm_chat_id'])

    socket = { id: message.id, dm_chat_id: message.dm_chat_id, body: message.body, author_id: message.author_id, created_at: message.created_at}
    
    DmChatChannelChannel.broadcast_to('dm_chat_channel_channel', socket)
  end
end