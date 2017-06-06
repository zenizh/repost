class Api::Posts::StarsController < Api::ApplicationController
  before_action :set_post

  def create
    star = current_user.stars.new(post: @post)

    if star.save
      render status: :ok, json: { id: @post.id }
    else
      head :bad_request
    end
  end

  def destroy
    star = current_user.stars.find_by(post: @post)
    star.destroy
    render status: :ok, json: { id: @post.id }
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end
