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

  test '#create failure with invalid params' do
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

  test '#update success' do
    patch :update, params: { id: @channel.id, name: 'new channel name' }, format: :json
    @channel.reload
    assert_response :success
    assert_equal 'new channel name', @channel.name
    assert_equal 'new channel name', response_body['name']
  end

  test '#update failure with invalid params' do
    patch :update, params: { id: @channel.id, name: nil }
    assert_response :bad_request
    assert_includes response_body['errors'], "Name can't be blank"
    assert_not_nil @channel.reload.name
  end

  test '#update failure with user role' do
    sign_in_as(users(:member))
    patch :update, params: { id: @channel.id, name: 'new channel name' }
    assert_response :forbidden
    assert_not_equal 'new channel name', @channel.reload.name
  end

  test '#destroy success' do
    delete :destroy, params: { id: @channel.id }
    assert_response :success
    assert_not Channel.exists?(id: @channel)
  end

  test '#destroy failure' do
    sign_in_as(users(:member))
    delete :destroy, params: { id: @channel.id }
    assert_response :forbidden
    assert Channel.exists?(id: @channel)
  end
end
