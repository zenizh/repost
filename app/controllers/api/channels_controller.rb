class Api::ChannelsController < Api::ApplicationController
  before_action :authorize_user
  before_action :set_channel, only: [:show, :update, :destroy]

  def create
    channel = Channel.new(channel_params)

    if channel.save
      current_user.subscribe(channel)
      render status: :ok, json: { id: channel.id }
    else
      render status: :bad_request, json: { errors: channel.errors.full_messages }
    end
  end

  def show
  end

  def update
    unless @channel.update(channel_params)
      render status: :bad_request, json: { errors: @channel.errors.full_messages }
    end
  end

  def destroy
    @channel.destroy
    head :ok
  end

  private

  def channel_params
    params.permit(:name)
  end

  def authorize_user
    authorize Channel
  end

  def set_channel
    @channel = Channel.find(params[:id])
  end
end
