class Api::TeamsController < Api::ApplicationController
  before_action :authorize_user
  before_action :set_team

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

  def team_params
    params.permit(:name)
  end

  def authorize_user
    authorize Team
  end

  def set_team
    @team = Team.first
  end
end
