class AccountsController < ApplicationController
  def edit
  end

  def update
    if current_user.update(user_params)
      flash[:notice] = 'Your account has been updated'
    end
    render :edit
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :screen_name)
  end
end
