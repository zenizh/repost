class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]

  def new
  end

  def create
    if login(params[:email], params[:password])
      redirect_back_or_to root_path, notice: 'You have been signed in'
    else
      flash.now[:alert] = 'Invalid email and/or password'
      render :new
    end
  end

  def destroy
    logout
    redirect_to sign_in_path, notice: 'You have been signed out'
  end
end
