require 'test_helper'

class Api::Users::PostsControllerTest < ActionController::TestCase
  test '#index' do
    user = users(:member)
    other_user = users(:other_member)
    sign_in_as(user)

    3.times do |n|
      other_user.posts.create(content: "post content #{n}")
    end

    get :index, params: { user_id: other_user.id }, format: :json
    assert_response :success
    assert_equal 3, response_body.count
    assert_equal other_user.posts.last.id, response_body.first['id']
  end
end
