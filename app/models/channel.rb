class Channel < ApplicationRecord
  belongs_to :team

  validates :team, presence: true
  validates :name, presence: true, uniqueness: { scope: :team }
end
