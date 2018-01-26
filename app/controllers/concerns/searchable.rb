module Searchable
  extend ActiveSupport::Concern

  included do
    helper_method :search_params
  end

  private

  def set_search
    set_form
    set_users
    set_tags
  end

  def set_form
    @form = SearchForm.new(Post.all, current_user, search_params)
  end

  def set_users
    @users = User.includes(:posts, avatar_attachment: :blob)
      .order('posts.created_at DESC NULLS LAST')
  end

  def set_tags
    @tags = Tag.where('taggings_count > 0').order(taggings_count: :desc)
  end

  def search_params
    params.permit(:text, :starred, tags: [], users: [])
  end
end
