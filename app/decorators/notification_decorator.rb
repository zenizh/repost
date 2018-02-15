module NotificationDecorator
  def content
    case notifiable_type
    when 'Comment'
      "#{comment.user.name_with_default} commented on your #{l(comment.post.posted_on, format: :long)}'s post"
    when 'Like'
      case like.likable_type
      when 'Post'
        "#{like.user.name_with_default} liked on your #{l(like.likable.posted_on, format: :long)}'s post"
      when 'Comment'
        "#{like.user.name_with_default} liked on your comment"
      end
    end
  end

  def image
    case notifiable_type
    when 'Comment'
      comment.user.avatar_with_default
    when 'Like'
      like.user.avatar_with_default
    end
  end

  def url
    case notifiable_type
    when 'Comment'
      comment.post
    when 'Like'
      case like.likable_type
      when 'Post'
        like.likable
      when 'Comment'
        like.likable.post
      end
    end
  end
end
