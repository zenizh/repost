class Api::Comments::LikesController < ApplicationController
  include Api::LikablesActions
  
  private

  def set_likable
    @likable = Comment.find(params[:comment_id])
  end
end
