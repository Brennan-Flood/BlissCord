class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :admin_id, presence: true

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'User'

  has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Channel'
    
end