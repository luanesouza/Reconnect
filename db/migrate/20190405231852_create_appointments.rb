class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.string :therapist_image
      t.string :therapist_first_name
      t.string :therapist_last_name

      t.timestamps
    end
  end
end
