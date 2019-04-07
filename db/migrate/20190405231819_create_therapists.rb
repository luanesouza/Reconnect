class CreateTherapists < ActiveRecord::Migration[5.2]
  def change
    create_table :therapists do |t|
      t.string :therapist_first_name
      t.string :therapist_last_name
      t.string :therapist_email
      t.string :therapist_password_digest
      t.string :specialty
      t.string :location
      t.string :therapist_skype
      t.string :price

      t.timestamps
    end
  end
end
