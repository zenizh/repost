class ChannelMember < ApplicationRecord
  belongs_to :channel
  belongs_to :member

  delegate :team, to: :channel

  validates :channel, presence: true
  validates :member, presence: true, uniqueness: { scope: :channel }
  validates_with TeammateValidator
end
