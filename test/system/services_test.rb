require 'application_system_test_case'

class ServicesTest < ApplicationSystemTestCase
  test 'show services' do
    sign_in_as(users(:admin))

    visit '/team/services'
    assert_current_path '/team/services'
    assert_content 'Slack'
    assert_content '#general'
    assert_selector 'tbody tr', count: 6
  end

  test 'create service' do
    sign_in_as(users(:admin))

    visit '/team/services'

    within '.btn-group' do
      click_on 'Add a service'
      click_on 'Slack'
    end

    assert_current_path '/team/services/new'

    fill_in 'webhookUrl', with: ''
    click_on 'Save'
    assert_content "Webhook url can't be blank"
    assert_current_path '/team/services/new'

    fill_in 'webhookUrl', with: 'http://example.com'
    fill_in 'channel', with: 'new channel name'
    click_on 'Save'
    assert_content 'Created new WebHook.'
    assert_content '#new channel name'
    assert_current_path '/team/services'
  end

  test 'with member' do
    sign_in_as(users(:member))

    visit '/team/services'
    assert_current_path '/'
  end
end
