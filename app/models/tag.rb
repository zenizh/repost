class Tag < ApplicationRecord
  validates :name, presence: true
  validates :taggings_count,
    presence: true,
    numericality: { greater_than_or_equal_to: 0 }
end
