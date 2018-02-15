module Api::LikablesActions
  extend ActiveSupport::Concern

  included do
    before_action :set_likable
  end

  def create
    like = current_user.likes.new(likable: @likable)

    if like.save
      LikeNotification.create(like)
      head :ok
    else
      head :bad_request
    end
  end

  def destroy
    like = current_user.likes.find_by(likable: @likable)
    like.destroy
    head :ok
  end

  private

  def set_likable
    raise NotImplementedError
  end
end
