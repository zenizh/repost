class Service < ApplicationRecord
  belongs_to :team

  validates :team, presence: true
  validates :type, presence: true
  validates :webhook_url, presence: true
  validates :on_posted, presence: true
  validates :on_commented, presence: true

  default_value_for :on_posted, true
  default_value_for :on_commented, true

  scope :on_posted, -> { where(on_posted: true) }
  scope :on_commented, -> { where(on_commented: true) }

  def notify(scope, data)
    raise NotImplementedError
  end

  private

  def content(scope, data)
    case scope
    when :on_posted
      "#{data.member.name}さんが#{data.created_at.to_date}の日報を投稿しました。"
    when :on_commented
      'commented'
    end
  end
end
