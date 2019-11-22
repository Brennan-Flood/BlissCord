@dm_chats_received.each do |chat|
  json.set! chat.id do
    json.partial! 'dm_chat_channel', dm_chat: chat
  end
end

@dm_chats_initiated.each do |chat|
  json.set! chat.id do
    json.partial! 'dm_chat_channel', dm_chat: chat
  end
end

