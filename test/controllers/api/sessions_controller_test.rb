require 'test_helper'

class Api::SessionsControllerTest < ActionController::TestCase
  test '#create success' do
    user = users(:member)
    post :create, params: { email: user.email, password: 'test1234' }, format: :json
    assert_response :success
    assert_equal user.email, response_body['email']
    assert_not_equal user.token, response_body['token']
  end

  test '#create failure' do
    post :create, params: { email: users(:member).email, password: 'invalid password' }
    assert_response :bad_request
    assert_includes response_body['errors'], 'Email or password is incorrect.'
  end

  test '#destroy' do
    user = users(:member)
    sign_in_as(user)
    delete :destroy
    assert_response :ok
    assert_nil user.reload.token
  end
end
