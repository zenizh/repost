class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.references :team, foreign_key: true, null: false
      t.string :type, null: false
      t.string :webhook_url, null: false
      t.string :channel
      t.boolean :on_posted, null: false, default: false
      t.boolean :on_commented, null: false, default: false
      t.timestamps
    end
  end
end
