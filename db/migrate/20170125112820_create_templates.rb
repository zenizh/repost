class CreateTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :templates do |t|
      t.references :user, foreign_key: true, null: false
      t.string :name
      t.text :content, null: false
      t.timestamps
    end
  end
end
