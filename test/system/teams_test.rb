require 'application_system_test_case'

class TeamsTest < ApplicationSystemTestCase
  test 'update team' do
    sign_in_as(users(:admin))

    visit '/'
    click_on 'team name'
    click_on 'Team Settings'
    assert_current_path '/team/settings'
    assert_content 'team name'

    fill_in 'name', with: ''
    click_on 'Save'
    assert_current_path '/team/settings'
    assert_content "Name can't be blank"
    assert_content 'team name'

    fill_in 'name', with: 'new team name'
    click_on 'Save'
    assert_current_path '/team/settings'
    assert_content 'new team name'
  end

  test 'with member' do
    sign_in_as(users(:member))

    visit '/team/settings'
    assert_current_path '/'
  end
end
