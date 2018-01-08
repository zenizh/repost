class ApplicationController < ActionController::Base
  before_action :require_login

  private

  def not_authenticated
    redirect_to sign_in_path, alert: 'You are not signed in'
  end

  def require_admin
    require_login

    unless current_user.admin?
      redirect_to root_path, alert: 'You are not authorized'
    end
  end
end
