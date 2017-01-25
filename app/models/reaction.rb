class Reaction < ApplicationRecord
  belongs_to :post
  belongs_to :member

  delegate :team, to: :post

  validates :post, presence: true
  validates :member, presence: true
  validates :name, presence: true, uniqueness: { scope: [:post, :member] }
  validates_with TeammateValidator
end
