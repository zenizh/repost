require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  def setup
    @team = teams(:team)
  end

  test 'name presence' do
    @team.name = nil
    assert @team.invalid?
  end

  test 'default name' do
    team = Team.new
    assert_equal 'Repost', team.name
  end
end
