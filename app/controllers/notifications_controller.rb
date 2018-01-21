class NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications
      .eager_load(comment: [:post, { user: :avatar_attachment }])
      .order(created_at: :desc)
      .page(params[:page])
    @notifications.unread.update_all(status: :read)
  end
end
