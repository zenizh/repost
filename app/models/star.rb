class Star < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :user, uniqueness: { scope: :post }
end
