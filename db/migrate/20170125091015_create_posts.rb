class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, null: false
      t.text :content, null: false
      t.integer :status, null: false, default: 0
      t.timestamps
    end
    add_index :posts, [:user_id, :status]
  end
end
