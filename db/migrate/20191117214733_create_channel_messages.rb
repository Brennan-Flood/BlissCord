class CreateChannelMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_messages do |t|
      t.string :body, null: false
      t.integer :channel_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
