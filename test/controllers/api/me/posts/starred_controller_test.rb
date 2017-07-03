require 'test_helper'

class Api::Me::Posts::StarredControllerTest < ActionController::TestCase
  test '#index' do
    user = users(:member)
    user.stars.create(post: Post.first)
    user.stars.create(post: Post.second)

    sign_in_as(user)

    get :index, format: :json
    assert_response :success
    assert_equal 2, response_body.count
    assert user.starred_posts.exists?(id: response_body.first['id'])
  end
end
