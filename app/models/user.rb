class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :subscriptions
  has_many :channels, through: :subscriptions
  has_many :posts
  has_many :reactions
  has_many :stars
  has_many :starred_posts, through: :stars, source: :post
  has_many :templates

  has_attached_file :avatar

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
    uniqueness: { case_sensitive: false }

  validates_attachment :avatar,
    content_type: { content_type: ['image/gif', 'image/jpeg', 'image/png'] },
    size: { in: 0..1.megabyte }

  attribute :screen_name, :string, default: -> { SecureRandom.hex(3) }

  enum role: { member: 0, admin: 10 }

  def name
    super.presence || screen_name
  end

  def starred?(post)
    starred_posts.exists?(id: post)
  end

  def update_token
    update(token: SecureRandom.hex)
  end

  def delete_token
    update(token: nil)
  end

  def subscribe(channel)
    subscriptions.create(channel: channel)
  end

  def unsubscribe(channel)
    subscriptions.find_by(channel: channel).destroy
  end
end
