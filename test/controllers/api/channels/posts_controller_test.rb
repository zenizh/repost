require 'test_helper'

class Api::Channels::PostsControllerTest < ActionController::TestCase
  def setup
    @channel = channels(:channel)
    @user = users(:member)
    @user.subscribe(@channel)
    sign_in_as(@user)
  end

  test '#index' do
    get :index, params: { channel_id: @channel.id }, format: :json
    assert_response :success
    assert @user.posts.exists?(response_body.first['id'])
    assert_equal 3, response_body.count
  end
end
