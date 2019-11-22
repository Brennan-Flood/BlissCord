class CreateDmChat < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_chats do |t|
      t.integer :user_1_id, null: false
      t.integer :user_2_id, null: false

    end
  end
end
