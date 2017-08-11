class ReactionFinder
  class Reaction < Reaction
    attr_accessor :count, :is_reacted, :user_names
  end

  def initialize(post, current_user)
    @post = post
    @current_user = current_user
  end

  def find
    reaction_counts.map do |name, count|
      Reaction.new(
        name: name,
        count: count,
        is_reacted: name.in?(reacted_names),
        user_names: reacted_user_ids[name].map { |id| users.find { |user| user.id == id }.name }
      )
    end
  end

  private

  attr_reader :post, :current_user

  def reaction_counts
    post.reactions.group(:name).count
  end

  def reacted_names
    @reacted_names ||= current_user.reactions.where(post: post).pluck(:name)
  end

  def reacted_user_ids
    @reactions ||= post.reactions
      .select(:name, :user_id)
      .group_by(&:name)
      .transform_values { |reactions| reactions.map(&:user_id) }
  end

  def users
    @users ||= User.where(id: post.reactions.pluck(:user_id).uniq).to_a
  end
end
