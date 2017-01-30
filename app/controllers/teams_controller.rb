class TeamsController < ApplicationController
  before_action :store_team_domain, unless: :logged_in?
  before_action :require_login

  def new
    @team = Team.new(domain: params[:domain])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      @team.members.create(user: current_user, role: :owner)
      redirect_to account_path
    else
      render :new
    end
  end

  def show
  end

  private

  def team_params
    params.require(:team).permit(:domain)
  end

  def store_team_domain
    session[:team_domain] = params.dig(:team, :domain)
  end
end
