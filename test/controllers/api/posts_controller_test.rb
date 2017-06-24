require 'test_helper'

class Api::PostsControllerTest < ActionController::TestCase
  def setup
    @member = users(:member)
    sign_in_as(@member)
  end

  test '#index' do
    get :index, format: :json
    post = response_body.first
    assert_response :success
    assert_equal 3, response_body.count
    assert_equal 'post content', post['content']
    assert_equal @member.id, post['user']['id']
  end

  test '#create success' do
    stub_request(:post, 'http://example.com')
    post :create, params: { content: 'new post content' }, format: :json
    assert_response :success
    assert @member.posts.exists?(content: 'new post content')
    assert_equal 'new post content', response_body['content']
  end

  test '#create failure' do
    count = @member.posts.count
    post :create
    assert_response :bad_request
    assert_includes response_body['errors'], "Content can't be blank"
    assert_equal count, @member.posts.count
  end
end
