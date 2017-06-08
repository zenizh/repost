class Api::TeamsController < Api::ApplicationController
  before_action :set_team

  def show
    render status: :ok, json: { name: @team.name }
  end

  def update
    if @team.update(team_params)
      render status: :ok, json: { name: @team.name }
    else
      head :bad_request
    end
  end

  private

  def set_team
    @team = Team.first
  end

  def team_params
    params.permit(:name)
  end
end
