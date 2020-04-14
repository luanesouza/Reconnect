class User < ApplicationRecord
  has_many :appointments
  has_many :therapists, through: :appointments

end
