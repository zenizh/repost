class Comment < ApplicationRecord
  include Likable
  include Notifiable

  belongs_to :post, counter_cache: true
  belongs_to :user

  validates :content, presence: true
end
