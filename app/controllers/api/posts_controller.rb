class Api::PostsController < Api::ApplicationController
  def index
    @posts = Post.includes(:user).order(created_at: :desc).limit(10)
  end

  def create
    post = current_user.posts.new(post_params)

    if post.save
      head :ok
    else
      head :bad_request
    end
  end

  private

  def post_params
    params.permit(:content)
  end
end
