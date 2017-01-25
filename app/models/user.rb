class User < ApplicationRecord
  has_many :members
  has_many :teams, through: :members

  validates :email,
    email_format: true,
    presence: true,
    uniqueness: { case_sensitive: false }
end
