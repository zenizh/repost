class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :domain, null: false
      t.string :name
      t.integer :status, null: false, default: 0
      t.timestamps
    end
    add_index :teams, :domain, unique: true
  end
end
