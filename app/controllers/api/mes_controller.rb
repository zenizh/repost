class Api::MesController < Api::ApplicationController
  def update
    unless current_user.update(me_params)
      head :bad_request
    end
  end

  private

  def me_params
    params.permit(:email, :screen_name, :name)
  end
end
