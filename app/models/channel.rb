class Channel < ApplicationRecord
  validates :name, presence: true
  validates :admin_id, presence: true
  validates :server_id, presence: true

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'User'

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: 'Server'

end