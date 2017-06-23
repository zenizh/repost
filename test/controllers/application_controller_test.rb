require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test '#root' do
    get root_path
    assert_response :success
  end
end
