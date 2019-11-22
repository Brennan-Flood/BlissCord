class ProfileIcon < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  attribute :image_url, :string, default: 'images/blue.png'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

end