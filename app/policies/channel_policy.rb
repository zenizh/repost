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

  def update?
    user.admin?
  end

  def destroy?
    user.admin?
  end
end
