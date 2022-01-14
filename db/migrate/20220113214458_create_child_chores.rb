class CreateChildChores < ActiveRecord::Migration[6.1]
  def change
    create_table :child_chores do |t|
      t.belongs_to :chore, null: false, foreign_key: true
      t.belongs_to :child, null: false, foreign_key: true

      t.timestamps
    end
  end
end
