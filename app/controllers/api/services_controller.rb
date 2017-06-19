class Api::ServicesController < Api::ApplicationController
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    @services = Service.all
  end

  def create
    @service = Service.new(service_params)

    unless @service.save
      render status: :bad_request, json: { errors: @service.errors.full_messages }
    end
  end

  def show
  end

  def update
    unless @service.update(service_params)
      render status: :bad_request, json: { errors: @service.errors.full_messages }
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
