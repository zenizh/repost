class Teams::UsersController < ApplicationController
  before_action :require_admin
  before_action :set_users, only: [:index, :update, :destroy]
  before_action :set_user, only: [:update, :destroy]

  def index
  end

  def update
    if @user.update(user_params)
      redirect_to teams_users_path, notice: 'User has been updated'
    else
      render :index
    end
  end

  def destroy
    if @user.destroy
      redirect_to teams_users_path, notice: 'User has been destroyed'
    else
      render :index
    end
  end

  private

  def user_params
    params.require(:user).permit(:role)
  end

  def set_users
    @users = User.active
  end

  def set_user
    @user = User.active.find(params[:id])
  end
end
