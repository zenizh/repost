require 'test_helper'

class PostTest < ActiveSupport::TestCase
  def setup
    @post = posts(:post)
  end

  test 'user presence' do
    @post.user = nil
    assert @post.invalid?
  end

  test 'content presence' do
    @post.content = nil
    assert @post.invalid?
  end
end
