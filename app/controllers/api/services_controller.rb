class Api::ServicesController < Api::ApplicationController
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    @services = Service.all
  end

  def create
    @service = Service.new(service_params)

    unless @service.save
      head :bad_request
    end
  end

  def show
  end

  def update
    unless @service.update(service_params)
      head :bad_request
    end
  end

  def destroy
    @service.destroy
    render status: :ok, json: { id: @service.id }
  end

  private

  def service_params
    params.permit(:type, :webhook_url, :channel, :on_post, :on_comment)
  end

  def set_service
    @service = Service.find(params[:id])
  end
end
