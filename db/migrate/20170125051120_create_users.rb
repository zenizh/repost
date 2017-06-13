class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :crypted_password
      t.string :salt
      t.string :token
      t.string :name
      t.string :screen_name, null: false
      t.integer :role, null: false, default: 0
      t.attachment :avatar
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :screen_name, unique: true
    add_index :users, [:email, :token]
  end
end
