class Api::Users::PostsController < Api::ApplicationController
  before_action :set_user

  def index
    @posts = @user.posts
      .with_action_by(current_user)
      .order(created_at: :desc)
      .page(params[:page])
      .per(10)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
