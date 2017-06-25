require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = users(:member)
    @other_user = users(:other_member)
  end

  test 'email format' do
    @user.email = 'invalid_email'
    assert @user.invalid?
  end

  test 'email presence' do
    @user.email = nil
    assert @user.invalid?
  end

  test 'email uniqueness' do
    @user.email = @other_user.email.upcase
    assert @user.invalid?
  end

  test 'password length' do
    @user.password = 'test'
    assert @user.invalid?
  end

  test 'role presence' do
    @user.role = nil
    assert @user.invalid?
  end

  test 'screen_name format' do
    %w(screen-name screen.name).each do |screen_name|
      @user.screen_name = screen_name
      assert @user.invalid?
    end
  end

  test 'screen_name length' do
    @user.screen_name = 'a' * 2
    assert @user.invalid?
    @user.screen_name = 'a' * 65
    assert @user.invalid?
  end

  test 'screen_name presence' do
    @user.screen_name = nil
    assert @user.invalid?
  end

  test 'screen_name uniqueness' do
    @user.screen_name = @other_user.screen_name.upcase
    assert @user.invalid?
  end

  test 'default screen_name' do
    user = User.new
    assert_not_nil user.screen_name
    assert_match /\A[0-9a-f]{6}\z/, user.screen_name
  end

  test 'default role' do
    user = User.new
    assert user.member?
  end

  test '#name' do
    assert_equal 'member name', @user.name
    @user.name = nil
    assert_equal 'member_screen_name', @user.name
  end

  test '#starred?' do
    post = posts(:post)
    assert_not @user.starred?(post)
    @user.stars.create(post: post)
    assert @user.starred?(post)
  end

  test '#update_token' do
    @user.update_token
    assert_not_nil @user.token
    assert_equal 32, @user.token.length
    token = @user.token
    @user.update_token
    assert_not_nil @user.token
    assert_not_equal token, @user.token
  end

  test '#delete_token' do
    @user.update_token
    assert_not_nil @user.token
    @user.delete_token
    assert_nil @user.token
  end

  test '#subscribe' do
    channel = channels(:channel)
    assert_not @user.channels.exists?(id: channel)
    @user.subscribe(channel)
    assert @user.channels.exists?(id: channel)
  end
end
