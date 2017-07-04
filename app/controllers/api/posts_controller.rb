class Api::PostsController < Api::ApplicationController
  def index
    @posts = Post.includes(:user)
      .order(created_at: :desc)
      .page(params[:page])
      .per(10)
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      Service.notify(:on_post, @post)
    else
      render status: :bad_request, json: { errors: @post.errors.full_messages }
    end
  end

  private

  def post_params
    params.permit(:content, :editor_state)
  end
end
