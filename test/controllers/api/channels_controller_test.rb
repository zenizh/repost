require 'test_helper'

class Api::ChannelsControllerTest < ActionController::TestCase
  def setup
    @admin = users(:admin)
    @channel = channels(:channel)
    sign_in_as(@admin)
  end

  test '#create success' do
    post :create, params: { name: 'new channel name' }
    channel = Channel.find_by(name: 'new channel name')
    assert_response :success
    assert channel
    assert @admin.channels.exists?(id: channel)
    assert_equal channel.id, response_body['id']
  end

  test '#create failure with duplicated channel name' do
    post :create, params: { name: @channel.name }
    assert_response :bad_request
    assert_includes response_body['errors'], 'Name has already been taken'
    assert_equal 1, Channel.where(name: @channel.name).count
  end

  test '#create failure with user role' do
    sign_in_as(users(:member))
    post :create, params: { name: 'new channel name' }
    assert_response :forbidden
    assert_not Channel.exists?(name: 'new channel name')
  end

  test '#show' do
    get :show, params: { id: @channel.id }, format: :json
    assert_response :success
    assert_equal @channel.id, response_body['id']
    assert_equal @channel.name, response_body['name']
  end
end
