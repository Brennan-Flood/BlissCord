class CreateServerMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :server_memberships do |t|
      t.integer :member_id, null: false, index: true
      t.integer :server_id, null: false, index: true
      t.timestamps
    end
  end
end
