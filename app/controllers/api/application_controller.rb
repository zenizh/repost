class Api::ApplicationController < ActionController::API
  include Sorcery::Controller

  before_action :authenticate

  helper_method :current_user

  private

  def current_user
    @current_user ||= User.find_by(
      email: request.headers[:HTTP_USER_EMAIL],
      token: request.headers[:HTTP_USER_TOKEN]
    )
  end

  def authenticate
    head :bad_request unless current_user
  end

  def form_authenticity_token; end
end
