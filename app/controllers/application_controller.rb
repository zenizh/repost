class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_with_basic

  def root
    render html: '', layout: true
  end

  private

  def authenticate_with_basic
    if !ENV['BASIC_USERNAME'] || !ENV['BASIC_PASSWORD']
      return
    end
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV['BASIC_USERNAME'] && password == ENV['BASIC_PASSWORD']
    end
  end
end
