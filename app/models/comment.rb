class Comment < ApplicationRecord
  include Likable
  include Notifiable

  belongs_to :post, counter_cache: true
  belongs_to :user

  delegate :tags, to: :post

  validates :content, presence: true
end
