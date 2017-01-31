class MembersController < ApplicationController
  def show
    @member = current_team.members.find_by(screen_name: params[:id])
    @posts = @member.posts.order(created_at: :desc)
    render 'teams/show'
  end
end
