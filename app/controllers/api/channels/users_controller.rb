class Api::Channels::UsersController < Api::ApplicationController
  before_action :set_channel

  def index
    @users = @channel.users
  end

  private

  def set_channel
    @channel = Channel.find(params[:channel_id])
  end
end
