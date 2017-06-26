class Api::Me::ChannelsController < Api::ApplicationController
  def index
    @channels = current_user.channels
  end
end
