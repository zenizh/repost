class Comment < ApplicationRecord
  include Likable

  belongs_to :post, counter_cache: true
  belongs_to :user

  validates :content, presence: true
end
