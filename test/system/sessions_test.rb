require 'application_system_test_case'

class SessionsTest < ApplicationSystemTestCase
  test 'sign in and out' do
    visit '/'
    assert_content 'Sign In'
    assert_current_path '/sign_in'

    click_on 'Submit'
    assert_content 'Email or password is incorrect.'
    assert_current_path '/sign_in'

    fill_in 'email', with: 'member@example.com'
    fill_in 'password', with: 'test1234'
    click_on 'Submit'
    assert_content 'Signed in successfully.'
    assert_current_path '/'

    click_on 'member name'
    click_on 'Sign Out'
    assert_content 'Sign In'
    assert_current_path '/sign_in'
  end
end
