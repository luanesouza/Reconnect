class CreateDiaries < ActiveRecord::Migration[5.2]
  def change
    create_table :diaries do |t|
      t.string :title
      t.text :content
      t.integer :diary_symptom_id
      t.integer :user_id

      t.timestamps
    end
  end
end
