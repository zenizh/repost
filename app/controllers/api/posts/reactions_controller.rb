class Api::Posts::ReactionsController < Api::ApplicationController
  before_action :set_post

  def index
    @reactions = @post.reactions.group(:name).count
  end

  def create
    reaction = @post.reactions.new(reaction_params)
    reaction.user = current_user

    if reaction.save
      @reaction = @post.reactions.named(reaction.name).group(:name).count.first
    else
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
