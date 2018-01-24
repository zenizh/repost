class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]

  def index
    @posts = Post.includes(:likes, :stars, :tags, user: { avatar_attachment: :blob })
      .order(posted_on: :desc, created_at: :desc)
      .page(params[:page])
  end

  def new
    @form = PostForm.new(current_user.posts.new)
  end

  def create
    @form = PostForm.new(current_user.posts.new, post_form_params)

    if @form.save
      Webhooks::PostService.new(@form.post).notify # TODO Execute as job
      redirect_to @form.post, notice: 'Post has been created'
    else
      render :new
    end
  end

  def show
    @post = Post.includes(comments: [:likes, { user: { avatar_attachment: :blob } }]).find(params[:id])
  end

  def edit
    @form = PostForm.new(@post)
  end

  def update
    @form = PostForm.new(@post, post_form_params)

    if @form.save
      redirect_to @form.post, notice: 'Post has been updated'
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: 'Post has been destroyed'
  end

  private

  def post_form_params
    params.require(:post_form).permit(:content, :posted_on, tag_list: [])
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end
end
