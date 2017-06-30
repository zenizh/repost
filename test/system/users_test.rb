require 'application_system_test_case'

class UsersTest < ApplicationSystemTestCase
  test 'create user' do
    visit '/sign_up'
    assert_content 'Sign Up'
    assert_current_path '/sign_up'

    click_on 'Submit'
    assert_content 'Email does not appear to be a valid e-mail address'
    assert_current_path '/sign_up'

    fill_in 'email', with: 'new_user@example.com'
    fill_in 'password', with: 'test1234'
    click_on 'Submit'
    assert_content 'Created your account.'
    assert_current_path '/'
  end
end
