class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :name
      t.integer :section
      t.string :title
      t.text :body
      t.string :contributor
      t.string :url

      t.timestamps
    end
  end
end
