class Stock < ApplicationRecord
  belongs_to :post
  belongs_to :member

  delegate :team, to: :post

  validates :post, presence: true
  validates :member, presence: true, uniqueness: { scope: :post }
  validates_with TeammateValidator
end
