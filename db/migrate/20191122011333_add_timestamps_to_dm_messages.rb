class AddTimestampsToDmMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :dm_messages, :created_at, :datetime, null: false
    add_column :dm_messages, :updated_at, :datetime, null: false
  end
end
