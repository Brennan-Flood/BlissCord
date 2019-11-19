json.extract! channel, :id, :name, :admin_id, :server_id

json.messages do
  channel.messages.each do |message|
    json.set! message.created_at do
      json.extract! message, :id, :body, :author_id, :channel_id, :created_at
    end
  end
end