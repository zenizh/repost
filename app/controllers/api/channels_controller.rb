class Api::ChannelsController < Api::ApplicationController
  def show
    @channel = Channel.find(params[:id])
  end
end
