class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  after_initialize :ensure_session_token

  has_many :servers,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'Server'

  has_many :channels,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'Channel'

  has_many :server_memberships,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: "ServerMembership"

  has_many :membered_servers,
    through: :server_memberships,
    source: :server

  has_many :channel_messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'ChannelMessage'

 has_many :initiated_friendships,
   primary_key: :id,
   foreign_key: :initiator,
   class_name: 'Friendship'
 
 has_many :received_friendships,
   primary_key: :id,
   foreign_key: :recipient,
   class_name: 'Friendship'

  has_many :dms,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'DmMessage'

  has_many :initiator_dm_chats,
    through: :initiated_friendships,
    source: :dm_chat_channel

  has_many :recipient_dm_chats,
    through: :received_friendships,
    source: :dm_chat_channel

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end