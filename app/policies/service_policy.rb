class ServicePolicy < ApplicationPolicy
  attr_reader :user, :service

  def initialize(user, service)
    @user = user
    @service = service
  end

  def index?
    user.admin?
  end

  def show?
    user.admin?
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
