class Template < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  validates :content, presence: true

  def name
    super.presence || 'no name'
  end
end
