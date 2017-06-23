require 'test_helper'

class ServiceTest < ActiveSupport::TestCase
  def setup
    @service = services(:service)
    stub_request(:post, 'http://example.com').with(body: request_body)
  end

  test 'channel presence' do
    @service.channel = nil
    assert @service.invalid?
  end

  test 'on_post inclusion' do
    @service.on_post = 'not boolean'
    assert @service.valid?
    assert_same true, @service.on_post
  end

  test 'on_post allow_nil' do
    @service.on_post = nil
    assert @service.valid?
  end

  test 'on_comment inclusion' do
    @service.on_comment = 'not boolean'
    assert @service.valid?
    assert_same true, @service.on_comment
  end

  test 'on_comment allow_nil' do
    @service.on_comment = nil
    assert @service.valid?
  end

  test 'type inclusion' do
    @service.type = 'SomeService'
    assert @service.invalid?
  end

  test 'type presence' do
    @service.type = nil
    assert @service.invalid?
  end

  test 'webhook_url presence' do
    @service.webhook_url = nil
    assert @service.invalid?
  end

  test 'webhook_url format' do
    @service.webhook_url = 'invalid url'
    assert @service.invalid?
  end

  test 'default on_post' do
    service = Service.new
    assert_same false, service.on_post
  end

  test 'default on_comment' do
    service = Service.new
    assert_same false, service.on_comment
  end

  test '.on_post' do
    assert_equal 2, Service.on_post.count
  end

  test '.on_comment' do
    assert_equal 3, Service.on_comment.count
  end

  test '.notify' do
    assert_not_equal 0, Service.on_post.count
    assert_nothing_raised do
      Service.notify(:on_post, posts(:post))
    end
  end

  private

  def request_body
    {
      payload: {
        channel: 'general',
        text: 'member name posted a daily report of 2017-06-30.'
      }.to_json
    }
  end
end
