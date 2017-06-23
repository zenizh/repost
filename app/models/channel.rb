class Channel < ApplicationRecord
  has_many :channel_users, dependent: :destroy
  has_many :users, through: :channel_users
  has_many :posts, through: :users

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
