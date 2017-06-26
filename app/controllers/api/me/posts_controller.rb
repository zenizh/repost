class Api::Me::PostsController < Api::ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    @posts = current_user.posts.order(created_at: :desc).limit(10)
  end

  def show
  end

  def update
    unless @post.update(post_params)
      render status: :bad_request, json: { errors: @post.errors.full_messages }
    end
  end

  def destroy
    @post.destroy
    head :ok
  end

  private

  def post_params
    params.permit(:content, :editor_state)
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def authorize_user
    authorize @post
  end
end
