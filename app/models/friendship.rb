class Friendship < ApplicationRecord
  validates :initiator, presence: true
  validates :recipient, presence: true

  belongs_to :initiator,
    primary_key: :id,
    foreign_key: :initiator,
    class_name: 'User'

  belongs_to :recipient,
    primary_key: :id,
    foreign_key: :recipient,
    class_name: 'User'

  
end
