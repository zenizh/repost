require 'test_helper'

class Api::Me::PostsControllerTest < ActionController::TestCase
  def setup
    @user = users(:member)
    @post = posts(:post)
    sign_in_as(@user)
  end

  test '#show' do
    get :show, params: { id: @post.id }, format: :json
    assert_response :success
    assert_equal @post.id, response_body['id']
  end

  test '#update success' do
    patch :update, params: { id: @post.id, content: 'new post content' }
    assert_response :success
    assert_equal 'new post content', @post.reload.content
  end

  test '#update failure' do
    patch :update, params: { id: @post.id, content: nil }
    assert_response :bad_request
    assert_not_nil @post.reload.content
  end

  test '#destroy' do
    delete :destroy, params: { id: @post.id }
    assert_response :success
    assert_not @user.posts.exists?(id: @post)
  end
end
