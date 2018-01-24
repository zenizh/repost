class CommentNotification < Notification
  def self.create(comment)
    if comment.user == comment.post.user
      return
    end
    super(user: comment.post.user, notifiable: comment)
  end
end
