class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true
      t.string :email, null: false
      t.string :session_token, null: false, unique: true, index: true
      t.string :password_digest, null: false
      
      t.timestamps
    end
  end
end
