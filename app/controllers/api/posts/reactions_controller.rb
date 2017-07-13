class Api::Posts::ReactionsController < Api::ApplicationController
  before_action :set_post

  def index
    @reactions = @post.reactions.includes(:user)
  end

  def create
    @reaction = @post.reactions.new(reaction_params)
    @reaction.user = current_user

    unless @reaction.save
      head :bad_request
    end
  end

  private

  def reaction_params
    params.permit(:name)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end
end
