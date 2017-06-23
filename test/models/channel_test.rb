require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  def setup
    @channel = channels(:channel)
    @other_channel = channels(:other_channel)
  end

  test 'name presence' do
    @channel.name = nil
    assert @channel.invalid?
  end

  test 'name uniqueness' do
    @channel.name = @other_channel.name.upcase
    assert @channel.invalid?
  end
end
