class CreateChannelMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :channel_members do |t|
      t.references :channel, foreign_key: true, null: false
      t.references :member, foreign_key: true, null: false
      t.timestamps
    end
    add_index :channel_members, [:channel_id, :member_id], unique: true
  end
end
