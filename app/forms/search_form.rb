class SearchForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :text
  attribute :tags, default: []
  attribute :users, default: []
  attribute :starred, :boolean, default: nil

  def initialize(posts, user, attributes)
    @posts = posts
    @user = user
    super(attributes)
  end

  def search
    if text.present?
      self.posts = posts.eager_load(:comments)
        .where('posts.content LIKE :text OR comments.content LIKE :text', text: "%#{text}%")
    end

    if tags.present?
      self.posts = posts.includes(taggings: :tag).where(tags: { name: tags })
    end

    if users.present?
      self.posts = posts.where(users: { screen_name: users })
    end

    if starred
      self.posts = posts.includes(:taggings).where(stars: { user: user })
    end

    posts.distinct
  end

  private

  attr_accessor :posts
  attr_reader :user
end
