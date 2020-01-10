class User < ApplicationRecord
  has_many :diaries
  has_many :symptoms, through: :diaries
end
