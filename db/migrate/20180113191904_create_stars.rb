class CreateStars < ActiveRecord::Migration[5.2]
  def change
    create_table :stars do |t|
      t.references :post, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.timestamps null: false
    end
    add_index :stars, [:post_id, :user_id], unique: true
  end
end
