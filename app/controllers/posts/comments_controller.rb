class Posts::CommentsController < ApplicationController
  before_action :set_post, only: :create
  before_action :set_comment, only: [:edit, :update, :destroy]

  def create
    @comment = @post.comments.new(comment_params)
    @comment.user = current_user

    if @comment.save
      redirect_to @post, notice: 'Comment has been created'
    else
      render 'posts#show'
    end
  end

  def edit
  end

  def update
    if @comment.update(comment_params)
      redirect_to @comment.post, notice: 'Comment has been updated'
    else
      render :edit
    end
  end

  def destroy
    @comment.destroy
    redirect_to @comment.post, notice: 'Comment has been destroyed'
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_comment
    @comment = current_user.comments.find(params[:id])
  end
end
