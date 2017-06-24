class Api::UsersController < Api::ApplicationController
  skip_before_action :authenticate_user, only: :create

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.create_token
    else
      render status: :bad_request, json: { errors: @user.errors.full_messages }
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
