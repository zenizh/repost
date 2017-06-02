class CreateChannelUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :channel_users do |t|
      t.references :channel, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end
    add_index :channel_users, [:channel_id, :user_id], unique: true
  end
end
