class ChannelsController < ApplicationController
  def show
    @channel = Channel.find(params[:id])
    @posts = @channel.posts.order(created_at: :desc)
    render 'teams/show'
  end
end
