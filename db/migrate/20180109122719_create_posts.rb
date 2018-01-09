class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, null: false
      t.text :content, null: false
      t.date :posted_on, null: false
      t.timestamps null: false
    end
    add_index :posts, :posted_on
  end
end
