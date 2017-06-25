class Api::SessionsController < Api::ApplicationController
  skip_before_action :authenticate_user, only: :create

  def create
    @user = login(params[:email], params[:password])

    if @user
      @user.update_token
    else
      render status: :bad_request, json: { errors: ['Email or password is incorrect.'] }
    end
  end

  def destroy
    current_user.delete_token
    head :ok
  end
end
