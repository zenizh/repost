require 'application_system_test_case'

class StarredPostsTest < ApplicationSystemTestCase
  test 'index starred posts' do
    user = users(:member)
    user.stars.create(post: Post.first)
    user.stars.create(post: Post.second)

    sign_in_as(user)

    visit '/starred'
    assert_current_path '/starred'

    within '#post_list_header' do
      assert_content 'Starred'
      assert_no_selector '.fa-user'
    end

    within '#post_list_content' do
      assert_selector '.card', count: 2
    end

    within '#post_content' do
      assert_content 'post content 0'
    end
  end
end
