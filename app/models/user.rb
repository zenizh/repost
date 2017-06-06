class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :channel_users, class_name: 'ChannelUser'
  has_many :channels, through: :channel_users
  has_many :posts
  has_many :stars
  has_many :starred_posts, through: :stars, source: :post
  has_many :templates

  validates :email,
    email_format: true,
    presence: true,
    uniqueness: { case_sensitive: false }
  validates :password,
    length: { minimum: 8 },
    if: -> { new_record? || changes[:crypted_password] }
  validates :role, presence: true
  validates :screen_name,
    format: { with: /\A[a-zA-Z0-9_]+\z/ },
    length: { in: 3..64 },
    presence: true,
    uniqueness: true

  attribute :screen_name, :string, default: -> { SecureRandom.hex(3) }

  enum role: { member: 0, owner: 10 }

  def name
    super.presence || screen_name
  end

  def set_token
    update(token: SecureRandom.hex)
  end

  def unset_token
    update(token: nil)
  end
end
