class Api::MesController < Api::ApplicationController
  def update
    unless current_user.update(me_params)
      render status: :bad_request, json: { errors: current_user.errors.full_messages }
    end
  end

  private

  def me_params
    params.permit(:email, :screen_name, :name, :avatar)
  end
end
