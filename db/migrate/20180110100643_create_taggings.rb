class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.references :post, foreign_key: true, null: false
      t.references :tag, foreign_key: true, null: false
      t.timestamps null: false
    end
    add_index :taggings, [:post_id, :tag_id], unique: true
  end
end
