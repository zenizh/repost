class Users::PasswordsController < ApplicationController
  skip_before_action :require_login

  before_action :set_token
  before_action :set_user
  before_action :require_user

  def edit
  end

  def update
    if @user.change_password!(params[:user][:password])
      auto_login(@user)
      redirect_to root_path, notice: 'Password has been updated'
    else
      render :edit
    end
  end

  private

  def set_token
    @token = params[:token]
  end

  def set_user
    @user = User.load_from_reset_password_token(@token)
  end

  def require_user
    unless @user
      redirect_to sign_in_path, alert: 'Invalid reset password token'
    end
  end
end
