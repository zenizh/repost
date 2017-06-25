require 'test_helper'

class Api::TeamsControllerTest < ActionController::TestCase
  def setup
    sign_in_as(users(:member))
  end

  test '#show' do
    get :show
    assert_response :success
    assert_equal 'team name', response_body['name']
  end

  test '#update success' do
    sign_in_as(users(:admin))
    patch :update, params: { name: 'new team name' }
    assert_response :success
    assert_equal 'new team name', response_body['name']
  end

  test '#update failure with user role' do
    patch :update, params: { name: 'new team name' }
    assert_response :forbidden
    assert_equal 'team name', Team.first.name
  end

  test '#update failure with params' do
    sign_in_as(users(:admin))
    patch :update, params: { name: nil }
    assert_response :bad_request
    assert_includes response_body['errors'], "Name can't be blank"
  end
end
