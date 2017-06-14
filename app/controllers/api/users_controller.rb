class Api::UsersController < Api::ApplicationController
  skip_before_action :authenticate, only: :create

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.set_token
    else
      head :bad_request
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
