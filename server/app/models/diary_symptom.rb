class DiarySymptom < ApplicationRecord
  belongs_to :symptom
  belongs_to :diary
end
