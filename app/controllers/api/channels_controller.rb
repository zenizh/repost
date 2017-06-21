class Api::ChannelsController < Api::ApplicationController
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
    @channel = Channel.find(params[:id])
  end

  private

  def channel_params
    params.permit(:name)
  end
end
