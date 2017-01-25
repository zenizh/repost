class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.references :post, foreign_key: true, null: false
      t.references :member, foreign_key: true, null: false
      t.timestamps
    end
    add_index :stocks, [:post_id, :member_id], unique: true
  end
end
