class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :admin_id, presence: true

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'User'

  has_many :channels,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Channel'

  has_many :memberships,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'ServerMembership'

  has_many :members,
    through: :memberships,
    source: :member
    
end