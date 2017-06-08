class Service < ApplicationRecord
  validates :type, presence: true
  validates :webhook_url, presence: true
  validates :on_posted, presence: true
  validates :on_commented, presence: true

  attribute :on_posted, :boolean, default: true
  attribute :on_commented, :boolean, default: true

  scope :on_posted, -> { where(on_posted: true) }
  scope :on_commented, -> { where(on_commented: true) }

  def notify(scope, data)
    raise NotImplementedError
  end

  def self.notify(scope, data)
    send(scope).each { |service| service.notify(scope, data) }
  end

  private

  def content(scope, data)
    case scope
    when :on_posted
      "#{data.user.name}さんが#{data.created_at.to_date}の日報を投稿しました。"
    when :on_commented
      'commented'
    end
  end
end
