class Api::Me::Posts::StarredController < Api::ApplicationController
  def index
    @posts = current_user.starred_posts
      .includes(:user)
      .order(created_at: :desc)
      .page(params[:page])
      .per(10)
  end
end
