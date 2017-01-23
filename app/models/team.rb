class Team < ApplicationRecord
  validates :domain,
    format: { with: /\A[a-z0-9]+(-[a-z0-9]+)*\z/ },
    length: { in: 3..64 },
    presence: true
  validates :status, numericality: { only_integer: true }, presence: true

  enum status: { closed: 0, open: 10 }
end
