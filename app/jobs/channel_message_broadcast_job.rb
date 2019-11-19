class ChannelMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(*args)
  end
end
