class Post < ApplicationRecord
  has_many :comments

  belongs_to :member

  delegate :team, to: :member

  validates :member, presence: true
  validates :content, presence: true
  validates :status, presence: true

  enum status: { draft: 0, published: 10 }
end
