class Notification < ApplicationRecord
  belongs_to :user
  belongs_to :notifiable, polymorphic: true
  belongs_to :comment,
    foreign_type: 'Comment',
    foreign_key: 'notifiable_id',
    optional: true

  enum status: { unread: 0, read: 10 }

  validates :type, presence: true
end
