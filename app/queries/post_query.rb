class PostQuery
  def initialize(posts = Post.all)
    @posts = posts
  end

  def with_action_by(user)
    posts.select(
      <<~SQL
        posts.*,
        CASE
          WHEN EXISTS (
            SELECT TRUE
            FROM reactions
            WHERE reactions.post_id = posts.id AND reactions.user_id = #{user.id}
          ) THEN TRUE
          ELSE FALSE
        END AS reacted,
        CASE
          WHEN EXISTS (
            SELECT TRUE
            FROM stars
            WHERE stars.post_id = posts.id AND stars.user_id = #{user.id}
          ) THEN TRUE
          ELSE FALSE
        END AS starred
      SQL
    )
  end

  private

  attr_reader :posts
end
