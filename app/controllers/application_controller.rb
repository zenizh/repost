class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :continue_trial

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
end
