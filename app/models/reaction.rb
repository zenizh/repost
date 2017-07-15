class Reaction < ApplicationRecord
  belongs_to :post, counter_cache: true
  belongs_to :user

  validates :post, presence: true
  validates :user, presence: true
  validates :name, presence: true, uniqueness: { scope: [:post, :user] }

  scope :named, ->(name) { where(name: name) }
end
