class Template < ApplicationRecord
  belongs_to :member

  validates :member, presence: true
  validates :content, presence: true
end
