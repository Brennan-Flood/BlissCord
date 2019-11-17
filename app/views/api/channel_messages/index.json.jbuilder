@messages.each do |message|
  json.set! message.id do
    json.partial! 'channel_message', message: message
  end
end