class StaticPagesController < ApplicationController
  def index
    @team = Team.new
  end
end
