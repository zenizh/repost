class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]

  def index
    @posts = Post.order(posted_on: :desc, created_at: :desc)
  end

  def new
    @post = current_user.posts.new
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      redirect_to @post, notice: 'Post has been created'
    else
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Post has been updated'
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: 'Post has been destroyed'
  end

  private

  def post_params
    params.require(:post).permit(:content, :posted_on)
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end
end
