module Likable
  extend ActiveSupport::Concern

  included do
    has_many :likes, as: :likable, dependent: :destroy
  end

  def liked_by?(user)
    likes.pluck(:user_id).include?(user.id)
  end
end
