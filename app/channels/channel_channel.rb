class ChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_for "channel_channel"
  end

  def speak(data)
    message = ChannelMessage.create(author_id: data['author_id'], 
      body: data["body"], 
      channel_id: data['channel_id']
    )

    socket = { id: message.id, 
      channel_id: message.channel_id, 
      body: message.body, 
      author_id: message.author_id, 
      created_at: message.created_at
    }

    ChannelChannel.broadcast_to('channel_channel', socket)
  end
end



