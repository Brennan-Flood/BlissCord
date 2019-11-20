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

  
end
