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

  test 'show user' do
    user = users(:member)
    other_user = users(:other_member)
    sign_in_as(user)

    3.times do |n|
      other_user.posts.create(content: "post content #{n}")
    end

    visit "/users/#{other_user.id}"

    within '#post_list_header' do
      assert_content other_user.name
    end

    within '#post_list_content' do
      assert_selector '.card', count: 3
    end

    within '#post_content' do
      assert_content 'post content 2'
    end
  end
end
