class AddColumnToAppointment < ActiveRecord::Migration[5.2]
  def change
    add_column :appointments, :user_id, :integer
    add_column :appointments, :therapist_id, :integer
  end
end
