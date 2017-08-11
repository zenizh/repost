class Api::Posts::ReactionsController < Api::ApplicationController
  before_action :set_post

  def index
    @reactions = ReactionFinder.new(@post, current_user).find
  end

  def create
    reaction = @post.reactions.new(reaction_params)
    reaction.user = current_user

    if reaction.save
      reactions = @post.reactions.named(params[:name])

      @reaction = ReactionFinder::Reaction.new(
        name: params[:name],
        count: reactions.count,
        is_reacted: true,
        user_names: reactions.map(&:user).pluck(:name)
      )
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
