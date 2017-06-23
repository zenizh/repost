require 'test_helper'

class StarTest < ActiveSupport::TestCase
  def setup
    @star = stars(:star)
  end

  test 'post presence' do
    @star.post = nil
    assert @star.invalid?
  end

  test 'user presence' do
    @star.user = nil
    assert @star.invalid?
  end

  test 'user uniqueness' do
    assert @star.dup.invalid?
  end
end
