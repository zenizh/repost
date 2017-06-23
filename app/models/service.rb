class Service < ApplicationRecord
  validates :channel, presence: true
  validates :on_post, allow_nil: true, inclusion: { in: [true, false] }
  validates :on_comment, allow_nil: true, inclusion: { in: [true, false] }
  validates :type, inclusion: { in: %w(SlackService) }, presence: true
  validates :webhook_url, presence: true, url: true

  attribute :on_post, :boolean, default: false
  attribute :on_comment, :boolean, default: false

  scope :on_post, -> { where(on_post: true) }
  scope :on_comment, -> { where(on_comment: true) }

  def self.notify(scope, object)
    send(scope).each { |service| service.notify(scope, object) }
  end

  def notify(scope, object)
    raise NotImplementedError
  end

  private

  def content(scope, object)
    case scope
    when :on_post
      "#{object.user.name} posted a daily report of #{object.created_at.to_date}."
    when :on_comment
      'commented'
    end
  end
end
