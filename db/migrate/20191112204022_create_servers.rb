class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, unique: true, index: true, null: false
      t.integer :admin_id, null: false, index: true

      t.timestamps
    end
  end
end
