class Api::SessionsController < Api::ApplicationController
  skip_before_action :authenticate, only: :create

  def create
    current_user = login(params[:email], params[:password])

    if current_user
      current_user.set_token
    else
      head :bad_request
    end
  end

  def destroy
    current_user.unset_token
    head :ok
  end
end
