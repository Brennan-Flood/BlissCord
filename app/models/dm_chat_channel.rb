class DmChatChannel < ApplicationRecord
  validates :friendship_id, presence: true, uniqueness: true

  belongs_to :friendship,
    primary_key: :id,
    foreign_key: :friendship_id,
    class_name: 'Friendship'

  has_many :dms,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :dm_chat_id,
    class_name: 'DmMessage'

  
end
