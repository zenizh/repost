class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :screen_name, :string, null: false
    add_column :users, :role, :integer, null: false, default: 0
    add_index :users, :screen_name, unique: true
  end
end
