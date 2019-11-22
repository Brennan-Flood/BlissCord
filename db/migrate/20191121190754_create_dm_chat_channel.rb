class CreateDmChatChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_chat_channels do |t|
      t.integer :friendship_id, presence: true
    end
  end
end
