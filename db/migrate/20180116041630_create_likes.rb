class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likable, polymorphic: true, null: false
      t.references :user, foreign_key: true, null: false
      t.timestamps null: false
    end
  end
end
