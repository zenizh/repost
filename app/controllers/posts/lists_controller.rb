class Posts::ListsController < ApplicationController
  include Searchable

  before_action :set_search

  def index
    @posts = @form.search
      .includes(user: { avatar_attachment: :blob })
      .order(posted_on: :desc, created_at: :desc)
      .page(params[:page])
      .per(100)
  end
end
