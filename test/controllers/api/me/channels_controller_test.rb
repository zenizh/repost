require 'test_helper'

class Api::Me::ChannelsControllerTest < ActionController::TestCase
  def setup
    @channel = channels(:channel)
    other_channel = channels(:other_channel)
    user = users(:member)
    [@channel, other_channel].each { |channel| user.subscribe(channel) }
    sign_in_as(user)
  end

  test '#index' do
    get :index, format: :json
    assert_response :success
    assert_equal @channel.name, response_body.first['name']
    assert_equal 2, response_body.count
  end
end
