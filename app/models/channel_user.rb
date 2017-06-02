class ChannelUser < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  validates :channel, presence: true
  validates :user, presence: true, uniqueness: { scope: :channel }
end
