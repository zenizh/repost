class Post < ApplicationRecord
  include Likable

  has_many :comments, dependent: :destroy
  has_many :stars, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  belongs_to :user

  validates :comments_count,
    presence: true,
    numericality: { greater_than_or_equal_to: 0 }
  validates :content, presence: true
  validates :posted_on, presence: true

  attribute :posted_on, :date, default: -> { Date.current }

  def starred_by?(user)
    stars.pluck(:user_id).include?(user.id)
  end
end
