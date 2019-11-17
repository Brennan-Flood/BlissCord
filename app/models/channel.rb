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

  has_many :messages,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'ChannelMessage'

end