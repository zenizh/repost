class PostForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attr_reader :post

  attribute :content
  attribute :posted_on, :date
  attribute :tag_list, default: []

  validates :content, presence: true
  validates :posted_on, presence: true

  delegate :persisted?, to: :post

  def initialize(post, attributes = {})
    @post = post
    super(post.slice(:content, :posted_on).merge(attributes))
  end

  def save
    if valid?
      ActiveRecord::Base.transaction do
        post.assign_attributes(content: content, posted_on: posted_on)
        post.save!
        post.taggings.destroy_all

        tag_list.each do |name|
          tag = Tag.find_or_create_by!(name: name)
          post.taggings.create!(tag: tag)
        end
      end
    end
  end
end
