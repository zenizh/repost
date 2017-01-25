class Template < ApplicationRecord
  belongs_to :member

  validates :member, presence: true
  validates :content, presence: true

  def name
    super.presence || 'no name'
  end
end
