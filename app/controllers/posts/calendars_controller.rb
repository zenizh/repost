class Posts::CalendarsController < ApplicationController
  before_action :set_date

  def show
    @posts = Post.includes(user: :avatar_attachment).where(posted_on: @date..@date.end_of_month)
  end

  private

  def set_date
    @date = Date.new(*params.values_at(:year, :month).map(&:to_i))
  end
end
