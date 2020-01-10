class Diary < ApplicationRecord
  belongs_to :user
  has_many :diary_symptoms
  has_many :symptoms, through: :diary_symptoms
end
