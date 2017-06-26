require 'test_helper'

class Api::Channels::UsersControllerTest < ActionController::TestCase
  def setup
    @channel = channels(:channel)
    @member = users(:member)
    @admin = users(:admin)
    [@member, @admin].each { |user| user.subscribe(@channel) }
    sign_in_as(@member)
  end

  test '#index' do
    get :index, params: { channel_id: @channel.id }, format: :json
    assert_response :success
    assert_equal @member.id, response_body.first['id']
    assert_equal 2, response_body.count
  end
end
