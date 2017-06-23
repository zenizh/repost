require 'test_helper'

class SubscriptionTest < ActiveSupport::TestCase
  def setup
    @subscription = subscriptions(:subscription)
  end

  test 'channel presence' do
    @subscription.channel = nil
    assert @subscription.invalid?
  end

  test 'user presence' do
    @subscription.user = nil
    assert @subscription.invalid?
  end

  test 'user uniqueness' do
    assert @subscription.dup.invalid?
  end
end
