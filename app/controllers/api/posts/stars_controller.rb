class Api::Posts::StarsController < ApplicationController
  before_action :set_post

  def create
    star = current_user.stars.new(post: @post)

    if star.save
      head :ok
    else
      head :bad_request
    end
  end

  def destroy
    star = current_user.stars.find_by(post: @post)
    star.destroy
    head :ok
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end
