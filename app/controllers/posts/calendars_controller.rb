class Posts::CalendarsController < ApplicationController
  include Searchable

  before_action :set_search
  before_action :set_date

  def show
    @posts = @form.search
      .includes(user: { avatar_attachment: :blob })
      .where(posted_on: @date..@date.end_of_month)
  end

  private

  def set_date
    @date = Date.new(*params.values_at(:year, :month).map(&:to_i))
  end
end
