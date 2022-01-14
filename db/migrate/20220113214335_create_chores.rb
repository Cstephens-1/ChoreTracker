class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :name
      t.boolean :finished
      t.integer :value

      t.timestamps
    end
  end
end
