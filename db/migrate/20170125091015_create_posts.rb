class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, null: false
      t.text :content, null: false
      t.text :editor_state
      t.timestamps
    end
  end
end
