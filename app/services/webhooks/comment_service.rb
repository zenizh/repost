module Webhooks
  class CommentService < BaseService
    def initialize(comment)
      @comment = comment
    end

    private

    attr_reader :comment

    def webhooks
      Webhook.active.on_comment.tag_in(comment.tags)
    end

    def content
      content = "@#{comment.user.screen_name} commented on [@#{comment.post.user.screen_name}'s report posted on #{comment.post.posted_on}](#{post_url(comment.post)})\n"
      comment.content.each_line do |line|
        content << "> #{line}"
      end
      content
    end
  end
end
