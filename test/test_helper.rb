require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'webmock/minitest'

WebMock.disable_net_connect!(allow_localhost: true)

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end

class ActionController::TestCase
  def sign_in_as(user)
    request.env['HTTP_USER_TOKEN'] = user.token
  end

  def response_body
    @response_body ||= JSON.parse(response.body)
  end
end

class ActionDispatch::SystemTestCase
  def teardown
    page.execute_script('localStorage.clear()')
  end

  def sign_in_as(user)
    visit '/sign_in'
    fill_in 'email', with: user.email
    fill_in 'password', with: 'test1234'
    click_on 'Submit'
  end
end
