class User < ApplicationRecord
  has_many :diaries
  has_many :diary_symptoms
  has_many :symptoms, through: :diaries_symptoms
end
