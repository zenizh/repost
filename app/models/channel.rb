class Channel < ApplicationRecord
  has_many :channel_members
  has_many :members, through: :channel_members
  has_many :posts, through: :members

  belongs_to :team

  validates :team, presence: true
  validates :name, presence: true, uniqueness: { scope: :team }
end
