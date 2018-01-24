module Webhooks
  class PostService < BaseService
    def initialize(post)
      @post = post
    end

    private

    attr_reader :post

    def webhooks
      Webhook.active.on_post.tag_in(post.tags)
    end

    def content
      content = "@#{post.user.screen_name} posted on [#{post.posted_on}'s report](#{post_url(post)})\n"
      post.content.each_line do |line|
        content << "> #{line}"
      end
      content
    end
  end
end
