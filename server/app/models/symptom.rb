class Symptom < ApplicationRecord
  has_many :diary_symptoms
  has_many :diaries, through: :diary_symptoms
end
