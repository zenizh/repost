class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :member, foreign_key: true, null: false
      t.text :content, null: false
      t.integer :status, null: false, default: 0
      t.timestamps
    end
    add_index :posts, [:member_id, :status]
  end
end
