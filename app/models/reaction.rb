class Reaction < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :post, presence: true
  validates :user, presence: true
  validates :name, presence: true, uniqueness: { scope: [:post, :user] }
end
