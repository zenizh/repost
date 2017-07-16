require 'test_helper'

class Api::Posts::ReactionsControllerTest < ActionController::TestCase
  def setup
    @user = users(:member)
    @post = @user.posts.first
    sign_in_as(@user)
  end

  test '#index' do
    (1..2).each do |n|
      @post.reactions.create(user: @user, name: "reaction name #{n}")
    end

    get :index, params: { post_id: @post.id }, format: :json
    assert_response :ok
    assert_equal 2, response_body.count
    assert_equal 'reaction name 1', response_body[0]['name']
  end

  test '#create success' do
    post :create, params: { post_id: @post.id, name: 'reaction name' }, format: :json
    assert_response :ok
    assert @post.reactions.exists?(user: @user, name: 'reaction name')
    assert_equal 'reaction name', response_body['name']
  end

  test '#create failure' do
    @post.reactions.create(user: @user, name: 'reaction name')
    assert_equal 1, @post.reactions.named('reaction name').count

    post :create, params: { post_id: @post.id, name: 'reaction name' }
    assert_response :bad_request
    assert_equal 1, @post.reactions.named('reaction name').count
  end
end
