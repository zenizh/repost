class Post < ApplicationRecord
  has_many :comments
  has_many :reactions, dependent: :destroy
  has_many :stars, dependent: :destroy

  belongs_to :user

  validates :user, presence: true
  validates :content, presence: true

  scope :with_action_by, ->(user) { PostQuery.new.with_action_by(user) }
end
