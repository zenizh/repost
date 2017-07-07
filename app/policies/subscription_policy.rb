class SubscriptionPolicy < ApplicationPolicy
  attr_reader :user, :subscription

  def initialize(user, subscription)
    @user = user
    @subscription = subscription
  end

  def create?
    user.admin?
  end

  def destroy?
    user.admin?
  end
end
