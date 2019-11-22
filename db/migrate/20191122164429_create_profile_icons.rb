class CreateProfileIcons < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_icons do |t|
      t.integer :user_id, null: false, unique: true, index: true
      t.string :image_url
    end
  end
end
