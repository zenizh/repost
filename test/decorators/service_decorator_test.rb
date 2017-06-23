require 'test_helper'

class ServiceDecoratorTest < ActiveSupport::TestCase
  def setup
    service = services(:service)
    @service = ActiveDecorator::Decorator.instance.decorate(service)
  end

  test '#name' do
    assert_equal 'Slack', @service.name
  end

  test '#icon_name' do
    assert_equal 'slack', @service.icon_name
  end
end
