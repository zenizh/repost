class PostForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attr_reader :post

  attribute :content
  attribute :posted_on, :date
  attribute :tag_list, default: []

  validates :content, presence: true
  validates :posted_on, presence: true
  validate :tag_format

  delegate :persisted?, to: :post

  def initialize(post, attributes = {})
    @post = post

    attributes = post.slice(
      :content,
      :posted_on
    ).merge(attributes)

    attributes[:tag_list] ||= post.tags.pluck(:name)

    super(attributes)
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

  private

  def tag_format
    tag_list.each do |tag|
      if tag !~ Tag::NAME_FORMAT
        errors.add(:tag_list, 'contains invalid name')
        break
      end
    end
  end
end
