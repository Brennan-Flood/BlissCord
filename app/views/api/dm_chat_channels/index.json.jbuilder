@dm_chats_received.each do |chat|
  @friendship = chat.friendship
  json.set! chat.id do
    json.partial! 'dm_chat_channel', dm_chat: chat
    json.friendship do 
      json.id @friendship.id 
      json.initiator @friendship.initiator
      json.recipient @friendship.recipient 
    end 
  end
end

@dm_chats_initiated.each do |chat|
  @friendship = chat.friendship
  json.set! chat.id do
    json.partial! 'dm_chat_channel', dm_chat: chat
    json.friendship do 
      json.id @friendship.id 
      json.initiator @friendship.initiator
      json.recipient @friendship.recipient 
    end 
  end
end

