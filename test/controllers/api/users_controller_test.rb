require 'test_helper'

class Api::UsersControllerTest < ActionController::TestCase
  test '#index' do
    user = users(:member)
    sign_in_as(user)
    get :index, format: :json
    assert_response :success
    assert_equal 4, response_body.count
    assert_equal user.screen_name, response_body.first['screenName']
  end

  test '#create success' do
    post :create, params: { email: 'new@example.com', password: 'test1234' }, format: :json
    user = User.find_by(email: 'new@example.com')
    assert_response :success
    assert user
    assert_not_empty user.token
    assert_equal 'new@example.com', response_body['email']
  end

  test '#create faulure' do
    post :create, params: { email: 'new@example.com', password: 'test' }
    assert_response :bad_request
    assert_includes response_body['errors'], 'Password is too short (minimum is 8 characters)'
    assert_not User.exists?(email: 'new@example.com')
  end

  test '#show' do
    user = users(:member)
    other_user = users(:other_member)
    sign_in_as(user)

    get :show, params: { id: other_user.id }, format: :json
    assert_response :success
    assert_equal other_user.id, response_body['id']
  end
end
