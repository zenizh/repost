class Users::ActivationsController < ApplicationController
  skip_before_action :require_login

  before_action :set_token
  before_action :set_user
  before_action :require_user

  def new
  end

  def create
    @user.password = params[:user][:password]

    ActiveRecord::Base.transaction do
      if @user.password_changed? && @user.save
        @user.activate!
        redirect_to root_path, notice: 'You have been activated'
      else
        render :new
      end
    end
  end

  private

  def set_token
    @token = params[:token]
  end

  def set_user
    @user = User.load_from_activation_token(@token)
  end

  def require_user
    unless @user
      redirect_to sign_in_path, alert: 'Invalid activation token'
    end
  end
end
