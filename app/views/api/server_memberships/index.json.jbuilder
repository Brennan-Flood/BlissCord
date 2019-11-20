@members.each do |member|
  json.set! member.id do
    json.partial! 'server_membership', member: member
  end
end