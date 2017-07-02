class Api::Me::Posts::StarredController < Api::ApplicationController
  def index
    @posts = current_user.starred_posts.order(created_at: :desc).limit(10)
  end
end
