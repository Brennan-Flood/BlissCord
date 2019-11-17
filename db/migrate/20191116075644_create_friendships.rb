class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :initiator, null: false, index: true
      t.integer :recipient, null: false, index: true
      t.boolean :accepted, default: false
      t.timestamps
    end
  end
end
