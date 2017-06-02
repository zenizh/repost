class Api::UsersController < Api::ApplicationController
  skip_before_action :authenticate, only: :create

  def create
    @user = User.new(user_params)

    unless @user.save
      head :bad_request
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
