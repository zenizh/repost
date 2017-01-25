class ChannelMember < ApplicationRecord
  belongs_to :channel
  belongs_to :member

  validates :channel, presence: true
  validates :member, presence: true, uniqueness: { scope: :channel }
  validate :teammate

  def teammate
    if channel.team != member.team
      errors.add(:member, 'is not a teammate')
    end
  end
end
