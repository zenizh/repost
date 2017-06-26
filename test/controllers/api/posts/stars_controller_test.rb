require 'test_helper'

class Api::Posts::StarsControllerTest < ActionController::TestCase
  def setup
    @user = users(:member)
    @post = posts(:post)
    sign_in_as(@user)
  end

  test '#create success' do
    post :create, params: { post_id: @post.id }
    assert_response :success
    assert_equal @post.id, response_body['id']
    assert @user.starred?(@post)
  end

  test '#create failure' do
    @user.stars.create(post: @post)
    post :create, params: { post_id: @post.id }
    assert_response :bad_request
    assert_equal 1, @user.stars.where(post: @post).count
  end

  test '#destroy' do
    @user.stars.create(post: @post)
    delete :destroy, params: { post_id: @post.id }
    assert_response :success
    assert_equal @post.id, response_body['id']
    assert_not @user.starred?(@post)
  end
end
