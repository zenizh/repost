require 'test_helper'

class ReactionFinderTest < ActiveSupport::TestCase
  test 'instance of Reaction' do
    reaction = ReactionFinder::Reaction.new
    assert_respond_to reaction, :name
    assert_respond_to reaction, :count
  end

  test '#find' do
    member = users(:member)
    other_member = users(:other_member)
    post = posts(:post)

    post.reactions.create(name: 'reaction 1', user: member)
    post.reactions.create(name: 'reaction 2', user: member)
    post.reactions.create(name: 'reaction 1', user: other_member)

    reactions = ReactionFinder.new(post, member).find

    reaction = reactions.first
    assert reaction.is_reacted
    assert_equal 'reaction 1', reaction.name
    assert_equal 2, reaction.count
    assert_equal [member.name, other_member.name], reaction.user_names
  end
end
