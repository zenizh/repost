class Channel < ApplicationRecord
  has_many :members, class_name: 'ChannelMember'

  belongs_to :team

  validates :team, presence: true
  validates :name, presence: true, uniqueness: { scope: :team }
end
