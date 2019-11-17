json.extract! server, :id, :name, :admin_id

json.members do
  server.memberships.each do |member|
    json.set! member.member_id do
      json.extract! member, :id, :member_id, :server_id
    end
  end
end

