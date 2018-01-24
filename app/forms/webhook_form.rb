class WebhookForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attr_reader :webhook

  attribute :type
  attribute :url
  attribute :channel
  attribute :active, :boolean, default: true
  attribute :on_post, :boolean
  attribute :on_comment, :boolean
  attribute :tag_name

  validates :type, presence: true
  validates :url, presence: true, url: true
  validates :channel, presence: true
  validates :active, inclusion: { in: [true, false] }
  validates :on_post, inclusion: { in: [true, false] }
  validates :on_comment, inclusion: { in: [true, false] }

  delegate :persisted?, to: :webhook

  def initialize(webhook, attributes = {})
    @webhook = webhook

    attributes = webhook.slice(
      :type,
      :url,
      :channel,
      :active,
      :on_post,
      :on_comment
    ).merge(attributes)

    attributes[:tag_name] ||= webhook.tag_name

    super(attributes)
  end

  def save
    if valid?
      ActiveRecord::Base.transaction do
        webhook.assign_attributes(
          type: type,
          url: url,
          channel: channel,
          active: active,
          on_post: on_post,
          on_comment: on_comment
        )

        if tag_name.present?
          webhook.tag = Tag.find_or_create_by!(name: tag_name)
        end

        webhook.save!
      end
    end
  end
end
