class ChannelPolicy < ApplicationPolicy
  attr_reader :user, :channel

  def initialize(user, channel)
    @user = user
    @channel = channel
  end

  def show?
    true
  end

  def create?
    user.admin?
  end
end
