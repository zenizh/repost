class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.references :user, foreign_key: true, null: false
      t.references :notifiable, polymorphic: true, null: false
      t.string :type, null: false
      t.integer :status, null: false, default: 0
      t.timestamps null: false
    end
    add_index :notifications, [:user_id, :status]
  end
end
