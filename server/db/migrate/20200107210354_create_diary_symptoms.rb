class CreateDiarySymptoms < ActiveRecord::Migration[5.2]
  def change
    create_table :diary_symptoms do |t|
      t.integer :diary_id
      t.integer :symptom_id 

      t.timestamps
    end
  end
end
