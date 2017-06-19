class Post < ApplicationRecord
  has_many :comments
  has_many :stars, dependent: :destroy

  belongs_to :user

  validates :user, presence: true
  validates :content, presence: true
end
