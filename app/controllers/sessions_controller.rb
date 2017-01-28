class SessionsController < ApplicationController
  def new
  end

  def create
    @user = login(params[:email], params[:password])

    if @user
      redirect_back_or_to account_path
    else
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_path
  end
end
