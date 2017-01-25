class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.references :team, foreign_key: true, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :channels, [:team_id, :name], unique: true
  end
end
