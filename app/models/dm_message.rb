

class DmMessage < ApplicationRecord
  validates :body, presence: true, length: {maximum: 1000}
  validates :dm_chat_id, presence: true
  validates :author_id, presence: true

  belongs_to :dm_chat_channel,
    primary_key: :id,
    foreign_key: :dm_chat_id,
    class_name: "DmChatChannel"

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  
  
end