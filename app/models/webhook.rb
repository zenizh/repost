class Webhook < ApplicationRecord
  belongs_to :tag, optional: true

  validates :type, presence: true
  validates :url, presence: true, url: true
  validates :channel, presence: true
  validates :active, inclusion: { in: [true, false] }
  validates :on_post, inclusion: { in: [true, false] }
  validates :on_comment, inclusion: { in: [true, false] }

  scope :active, -> { where(active: true) }
  scope :on_post, -> { where(on_post: true) }
  scope :on_comment, -> { where(on_comment: true) }
  scope :tag_in, ->(tags) { where(tag: nil).or(where(tag: tags)) }

  delegate :name, to: :tag, prefix: true, allow_nil: true
end
