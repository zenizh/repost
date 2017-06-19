class Team < ApplicationRecord
  validates :name, presence: true

  attribute :name, :string, default: 'Repost'
end
