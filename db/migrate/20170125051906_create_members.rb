class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.references :team, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.string :name
      t.string :screen_name, null: false
      t.integer :role, null: false, default: 0
      t.timestamps
    end
    add_index :members, [:team_id, :user_id], unique: true
    add_index :members, [:team_id, :screen_name], unique: true
  end
end
