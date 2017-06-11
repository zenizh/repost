class Service < ApplicationRecord
  validates :type, presence: true
  validates :webhook_url, presence: true
  validates :on_post, inclusion: { in: [true, false] }, allow_nil: true
  validates :on_comment, inclusion: { in: [true, false] }, allow_nil: true

  attribute :on_post, :boolean, default: true
  attribute :on_comment, :boolean, default: true

  scope :on_post, -> { where(on_post: true) }
  scope :on_comment, -> { where(on_comment: true) }

  def name
    raise NotImplementedError
  end

  def icon_name
    raise NotImplementedError
  end

  def notify(scope, data)
    raise NotImplementedError
  end

  def self.notify(scope, data)
    send(scope).each { |service| service.notify(scope, data) }
  end

  private

  def content(scope, data)
    case scope
    when :on_post
      "#{data.user.name}さんが#{data.created_at.to_date}の日報を投稿しました。"
    when :on_comment
      'commented'
    end
  end
end
