class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :member

  validates :post, presence: true
  validates :member, presence: true
  validates :content, presence: true
  validate :teammate

  def teammate
    if post.team != member.team
      errors.add(:member, 'is not a teammate')
    end
  end
end
