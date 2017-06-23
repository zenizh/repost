class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.string :type, null: false
      t.string :webhook_url, null: false
      t.string :channel, null: false
      t.boolean :on_post, default: false
      t.boolean :on_comment, default: false
      t.timestamps
    end
  end
end
