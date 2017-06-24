require 'test_helper'

class Api::MesControllerTest < ActionController::TestCase
  def setup
    @user = users(:member)
    set_member_token
  end

  test '#update success' do
    patch :update, params: { name: 'new user name' }, format: :json
    @user.reload
    assert_response :success
    assert_equal 'new user name', @user.name
    assert_equal @user.name, response_body['name']
  end

  test '#update failure' do
    patch :update, params: { screen_name: 'invalid screen name' }, format: :json
    @user.reload
    assert_response :bad_request
    assert_includes response_body['errors'], 'Screen name is invalid'
    assert_not_equal 'invalid screen name', @user.screen_name
  end
end
