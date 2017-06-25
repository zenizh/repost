class TeamPolicy < ApplicationPolicy
  attr_reader :user, :team

  def initialize(user, team)
    @user = user
    @team = team
  end

  def show?
    true
  end

  def update?
    user.admin?
  end
end
