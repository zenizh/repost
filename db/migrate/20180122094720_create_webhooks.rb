class CreateWebhooks < ActiveRecord::Migration[5.2]
  def change
    create_table :webhooks do |t|
      t.references :tag, foreign_key: true
      t.string :type, null: false
      t.string :url, null: false
      t.string :channel, null: false
      t.boolean :active, null: false, default: true
      t.boolean :on_post, null: false, default: false
      t.boolean :on_comment, null: false, default: false
      t.timestamps null: false
    end
    add_index :webhooks, [:active, :on_post]
    add_index :webhooks, [:active, :on_comment]
  end
end
