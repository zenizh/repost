require 'application_system_test_case'

class ChannelsTest < ApplicationSystemTestCase
  def setup
    super

    @channel = channels(:channel)
    @channel.update name: 'old channel name'

    @member = users(:member)
    @admin = users(:admin)
    @member.subscribe(@channel)
    @admin.subscribe(@channel)
  end

  test 'create channel' do
    sign_in_as(@admin)

    visit '/'
    find('#create_channel').click
    assert_content 'Create a channel'

    fill_in 'name', with: ''
    click_on 'Create'
    assert_content "Name can't be blank"
    assert_current_path '/'

    fill_in 'name', with: 'new channel name'
    click_on 'Create'
    assert_content 'Created new channel.'
    assert_current_path "/channels/#{Channel.last.id}"

    within '#post_list_header' do
      assert_content 'new channel name'
      assert_content 1
    end
  end

  test 'update channel' do
    sign_in_as(@admin)

    visit "/channels/#{@channel.id}"
    assert_current_path "/channels/#{@channel.id}"
    assert_content 'old channel name'

    find('#edit_channel').click
    assert_content 'Edit channel'

    fill_in 'name', with: ''
    click_on 'Edit'
    assert_content "Name can't be blank"
    assert_content 'old channel name'

    fill_in 'name', with: 'updated channel name'
    click_on 'Edit'
    assert_content 'updated channel name'
    assert_no_content 'old channel name'
  end

  test 'update channel users' do
    sign_in_as(@admin)

    visit "/channels/#{@channel.id}"
    assert_current_path "/channels/#{@channel.id}"

    within '#post_list_header' do
      assert_content 2
    end

    find('#edit_channel_users').click
    assert_content 'Edit channel users'

    first('button', text: 'Join').click

    within '#post_list_header' do
      assert_content 3
    end

    first('button', text: 'Leave').click

    within '#post_list_header' do
      assert_content 2
    end
  end

  test 'destroy channel' do
    sign_in_as(@admin)

    visit "/channels/#{@channel.id}"
    assert_content 'old channel name'

    find('#edit_channel').click

    accept_alert do
      find('#delete_channel').click
    end

    assert_content 'Deleted a channel.'
    assert_no_content 'old channel name'
    assert_current_path '/'
  end

  test 'select channel' do
    sign_in_as(@member)

    visit '/'
    click_on @channel.name
    assert_current_path "/channels/#{@channel.id}"

    within '#post_list_header' do
      assert_content @channel.name
    end
  end

  test 'show channel' do
    sign_in_as(@member)

    visit "/channels/#{@channel.id}"

    within '#post_list_header' do
      assert_content @channel.name
      assert_content 2
    end

    within '#post_content' do
      assert_content 'post content'
    end
  end

  test 'with member' do
    sign_in_as(@member)

    visit '/'
    assert_no_selector '#create_channel'

    visit "/channels/#{@channel.id}"
    find('#edit_channel').click
    assert_no_content 'Edit channel'
    find('#edit_channel_users').click
    assert_no_content 'Edit channel users'
  end
end
