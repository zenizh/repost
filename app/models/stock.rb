class Stock < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :post, presence: true
  validates :user, presence: true, uniqueness: { scope: :post }
end
