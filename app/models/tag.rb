class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy

  NAME_FORMAT = /\A\w+\z/

  validates :name, presence: true, format: { with: NAME_FORMAT }
  validates :taggings_count,
    presence: true,
    numericality: { greater_than_or_equal_to: 0 }
end
