class ChannelMessage < ApplicationRecord
  after_create_commit { MessageBroadcastJob.perform_later self }

  validates :body, presence: true, length: {minimum: 1, maximum: 1000}
  validates :author_id, presence: true
  validates :channel_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Channel'

end
