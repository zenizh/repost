class Api::Me::ChannelsController < Api::ApplicationController
  before_action :set_channel, only: [:update, :destroy]

  def index
    @channels = current_user.channels
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

  def set_channel
    @channel = current_user.channels.find(params[:id])
  end
end
