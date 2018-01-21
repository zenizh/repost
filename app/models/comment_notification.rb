class CommentNotification < Notification
  def self.create(comment)
    super(user: comment.post.user, notifiable: comment)
  end
end
