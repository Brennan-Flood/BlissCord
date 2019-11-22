@messages.each do |message|
  json.set! message.id do
    json.partial! 'dm_message', message: message
  end
end