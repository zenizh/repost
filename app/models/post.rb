class Post < ApplicationRecord
  belongs_to :user

  validates :content, presence: true
  validates :posted_on, presence: true

  attribute :posted_on, :date, default: -> { Date.current }
end
