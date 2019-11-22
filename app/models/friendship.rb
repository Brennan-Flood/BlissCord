class Friendship < ApplicationRecord
  validates :initiator, presence: true
  validates :recipient, presence: true

  belongs_to :initiator_user,
    primary_key: :id,
    foreign_key: :initiator,
    class_name: 'User'

  belongs_to :recipient_user,
    primary_key: :id,
    foreign_key: :recipient,
    class_name: 'User'

  has_one :dm_chat_channel,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :friendship_id,
    class_name: 'DmChatChannel'

end
