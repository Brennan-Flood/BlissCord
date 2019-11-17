class ServerMembership < ApplicationRecord
  validates :member_id, presence: true
  validates :server_id, presence: true, uniqueness: {scope: :member_id}

  belongs_to :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: 'User'

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: "Server"
  
  def self.find_by_credentials(user_id, server_id)
    @server_membership = ServerMembership.find_by(member_id: user_id, server_id: server_id)
    return nil unless @server_membership
    @server_membership
  end
end
