class Api::TeamsController < Api::ApplicationController
  before_action :UPDATE_TEAM

  def show
    render status: :ok, json: { name: @team.name }
  end

  def update
    if @team.update(team_params)
      render status: :ok, json: { name: @team.name }
    else
      render status: :bad_request, json: { errors: @team.errors.full_messages }
    end
  end

  private

  def UPDATE_TEAM
    @team = Team.first
  end

  def team_params
    params.permit(:name)
  end
end
