class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references :post, foreign_key: true, null: false
      t.references :member, foreign_key: true, null: false
      t.text :content, null: false
      t.timestamps
    end
    add_index :comments, [:post_id, :member_id]
  end
end
