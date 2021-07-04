class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string "name"
      t.integer "welcome_o"
      t.integer "minimum_spend"
      t.integer "user_id"
    end
  end
end
