class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :title
      t.boolean :complete
      t.integer :rating
      t.float :price

      t.timestamps
    end
  end
end
