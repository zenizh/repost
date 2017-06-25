require 'test_helper'

class Api::ServicesControllerTest < ActionController::TestCase
  def setup
    @admin = users(:admin)
    sign_in_as(@admin)
  end

  test '#index success' do
    get :index, format: :json
    assert_response :success
    assert_equal 6, response_body.count
    assert Service.exists?(response_body.first['id'])
  end

  test '#index failure' do
    sign_in_as(users(:member))
    get :index
    assert_response :forbidden
    assert_empty response.body
  end

  test '#create success' do
    post :create, params: { type: 'SlackService', webhook_url: 'http://new.example.com' }, format: :json
    assert_response :success
    assert SlackService.exists?(webhook_url: 'http://new.example.com')
    assert_equal 'http://new.example.com', response_body['webhookUrl']
  end

  test '#create faulure' do
    post :create, params: { webhook_url: 'http://new.example.com' }, format: :json
    assert_response :bad_request
    assert_includes response_body['errors'], "Type can't be blank"
    assert_not Service.exists?(webhook_url: 'http://new.example.com')
  end

  test '#show' do
    service = services(:service)
    get :show, params: { id: service.id }, format: :json
    assert_response :success
    assert_equal service.id, response_body['id']
  end

  test '#update success' do
    service = services(:service)
    patch :update, params: { id: service.id, webhook_url: 'http://new.example.com' }, format: :json
    assert_response :success
    assert_equal 'http://new.example.com', service.reload.webhook_url
    assert_equal 'http://new.example.com', response_body['webhookUrl']
  end

  test '#update faulure' do
    service = services(:service)
    patch :update, params: { id: service.id, webhook_url: 'invalid url' }, format: :json
    assert_response :bad_request
    assert_includes response_body['errors'], 'Webhook url is not a valid URL'
    assert_not_equal 'invalid url', service.reload.webhook_url
  end

  test '#destroy' do
    service = services(:service)
    delete :destroy, params: { id: service.id }, format: :json
    assert_response :success
    assert_not Service.exists?(service.id)
  end
end
