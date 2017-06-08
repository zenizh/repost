class Api::ServicesController < Api::ApplicationController
  def index
    @services = Service.all
  end
end
