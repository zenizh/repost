class Api::Me::ChannelsController < Api::ApplicationController
  def index
    @channels = current_user.channels
  end

  def update
    @channel = current_user.channels.find(params[:id])

    unless @channel.update(channel_params)
      render status: :bad_request, json: { errors: @channel.errors.full_messages }
    end
  end

  private

  def channel_params
    params.permit(:name)
  end
end
