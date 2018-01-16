class Api::Posts::LikesController < ApplicationController
  include Api::LikablesActions

  private

  def set_likable
    @likable = Post.find(params[:post_id])
  end
end
