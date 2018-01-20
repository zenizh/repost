class Posts::ListsController < ApplicationController
  def index
    @posts = Post.includes(user: :avatar_attachment)
      .order(posted_on: :desc, created_at: :desc)
      .page(params[:page])
      .per(100)
  end
end
