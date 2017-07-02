require 'application_system_test_case'

class AccountsTest < ApplicationSystemTestCase
  test 'update account' do
    sign_in_as(users(:member))

    visit '/account/edit'
    assert_current_path '/account/edit'

    fill_in 'screenName', with: ''
    fill_in 'name', with: 'new user name'
    click_on 'Save'
    assert_content "Screen name can't be blank"

    within '#footer' do
      assert_no_content 'new user name'
    end

    fill_in 'screenName', with: 'new_user_screen_name'
    fill_in 'name', with: 'new user name'
    click_on 'Save'
    assert_content 'Updated user settings.'

    within '#footer' do
      assert_content 'new user name'
    end
  end
end
