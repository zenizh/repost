class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :continue_trial
  before_action :authorize_member, if: :current_team

  helper_method :current_team

  private

  def not_authenticated
    redirect_to new_session_path
  end

  def continue_trial
    if logged_in? && session[:team_domain]
      redirect_to new_team_path(params: { domain: session[:team_domain] })
      session[:team_domain] = nil
    end
  end

  def current_team
    if request.subdomain
      @current_team ||= Team.find_by(domain: request.subdomain)
    end
  end

  def authorize_member
    if !current_user || !current_user.teams.exists?(current_team)
      raise ActionController::RoutingError.new('Not Found')
    end
  end
end
