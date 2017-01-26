class User < ApplicationRecord
  has_many :members
  has_many :teams, through: :members

  validates :email,
    email_format: true,
    presence: true,
    uniqueness: { case_sensitive: false }
  validates :password,
    length: { minimum: 8 },
    if: -> { new_record? || changes[:crypted_password] }

  authenticates_with_sorcery!
end
