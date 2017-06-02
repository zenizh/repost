class Api::Me::PostsController < Api::ApplicationController
  def index
    @posts = current_user.posts.order(created_at: :desc).limit(10)
  end
end
