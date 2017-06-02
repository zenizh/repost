class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.references :post, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :reactions, [:post_id, :name]
    add_index :reactions, [:post_id, :user_id, :name], unique: true
  end
end
