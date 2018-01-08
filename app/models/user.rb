class User < ApplicationRecord
  authenticates_with_sorcery!

  enum role: { member: 0, admin: 10 }

  validates :email,
    email: true,
    presence: true,
    uniqueness: { case_sensitive: false }
  validates :password,
    length: { minimum: 8 },
    if: -> { new_record? || changes[:crypted_password] }
  validates :role, presence: true
  validates :screen_name,
    format: { with: /\A[0-9_a-zA-Z]+\z/ },
    length: { maximum: 64 },
    presence: true,
    uniqueness: { case_sensitive: false }

  attribute :role, default: 0
  attribute :screen_name, default: -> { default_screen_name }

  scope :active, -> { where(activation_state: 'active') }
  scope :pending, -> { where(activation_state: 'pending') }

  before_save do
    if last_admin? && !admin?
      errors.add(:role, 'must have at least one admin')
      throw(:abort)
    end
  end

  before_destroy do
    throw(:abort) if last_admin?
  end

  def self.default_screen_name
    screen_name = SecureRandom.hex(3)
    exists?(screen_name: screen_name) ? default_screen_name : screen_name
  end

  def name
    super.presence || screen_name
  end

  def password_changed?
    # crypted_password is created before validation
    valid?
    crypted_password_changed?
  end

  private

  def last_admin?
    admins = User.active.admin
    admins.count == 1 && admins.exists?(id: id)
  end
end
