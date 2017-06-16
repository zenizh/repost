class Api::Me::PostsController < Api::ApplicationController
  before_action :set_post, only: [:show, :update]

  def index
    @posts = current_user.posts.order(created_at: :desc).limit(10)
  end

  def show
  end

  def update
    unless @post.update(post_params)
      head :bad_request
    end
  end

  private

  def post_params
    params.permit(:content, :editor_state)
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end
end
