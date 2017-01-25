class Team < ApplicationRecord
  has_many :channels
  has_many :members
  has_many :owners,
    -> { where(role: Member.roles['owner']) },
    class_name: 'Member'
  has_many :posts, through: :members

  validates :domain,
    format: { with: /\A[a-z0-9]+(-[a-z0-9]+)*\z/ },
    length: { in: 3..64 },
    presence: true,
    uniqueness: { case_sensitive: false }
  validates :status, presence: true

  enum status: { closed: 0, open: 10 }

  def name
    super.presence || domain
  end
end
