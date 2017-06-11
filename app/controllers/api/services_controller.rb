class Api::ServicesController < Api::ApplicationController
  before_action :set_service, only: [:show, :update]

  def index
    @services = Service.all
  end

  def show
  end

  def update
    unless @service.update(service_params)
      head :bad_request
    end
  end

  private

  def service_params
    params.permit(:webhook_url, :channel, :on_post, :on_comment)
  end

  def set_service
    @service = Service.find(params[:id])
  end
end
