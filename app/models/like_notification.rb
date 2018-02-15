class LikeNotification < Notification
  def self.create(like)
    if like.user == like.likable.user
      return
    end
    super(user: like.likable.user, notifiable: like)
  end
end
