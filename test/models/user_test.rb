require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'email' do
    user = users(:member)
    user.email = 'invalid_email'
    assert user.invalid?
  end
end
