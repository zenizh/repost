class Channel < ApplicationRecord
  has_many :subscriptions, dependent: :destroy
  has_many :users, through: :subscriptions
  has_many :posts, through: :users

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
