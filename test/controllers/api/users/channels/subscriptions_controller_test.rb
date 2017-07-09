require 'test_helper'

class Api::Users::Channels::SubscriptionsControllerTest < ActionController::TestCase
  def setup
    @admin = users(:admin)
    @member = users(:member)
    @channel = channels(:channel)
    sign_in_as(@admin)
  end

  test '#create success' do
    assert_not @member.subscriptions.exists?(channel: @channel)

    post :create, params: { user_id: @member.id, channel_id: @channel.id }, format: :json
    assert_response :success
    assert @member.subscriptions.exists?(channel: @channel)
    assert_equal @member.id, response_body['id']
  end

  test '#create failure' do
    sign_in_as(@member)

    post :create, params: { user_id: @member.id, channel_id: @channel.id }
    assert_response :forbidden
    assert_not @member.subscriptions.exists?(channel: @channel)
  end

  test '#destroy success' do
    @member.subscribe(@channel)
    assert @member.subscriptions.exists?(channel: @channel)

    delete :destroy, params: { user_id: @member.id, channel_id: @channel.id }
    assert_response :success
    assert_not @member.subscriptions.exists?(channel: @channel)
    assert_equal @member.id, response_body['id']
  end

  test '#destroy failure' do
    @member.subscribe(@channel)
    assert @member.subscriptions.exists?(channel: @channel)

    sign_in_as(@member)

    delete :destroy, params: { user_id: @member.id, channel_id: @channel.id }
    assert_response :forbidden
    assert @member.subscriptions.exists?(channel: @channel)
  end
end
