class CreateDmMessage < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :dm_chat_id, null: false
    end
  end
end
