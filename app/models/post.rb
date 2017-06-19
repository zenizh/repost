class Post < ApplicationRecord
  has_many :comments

  belongs_to :user

  validates :user, presence: true
  validates :content, presence: true
end
