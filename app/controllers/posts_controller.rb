class PostsController < ApplicationController
  def create
    @post = current_member.posts.new(post_params)

    if @post.save
      current_team.notify_to_services(:on_posted, @post)
      redirect_to current_team
    else
      render 'teams/show'
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
