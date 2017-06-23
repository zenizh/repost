class SlackService < Service
  attribute :channel, :string, default: 'general'

  def notify(scope, object)
    notifier = Slack::Notifier.new(webhook_url, channel: channel)
    notifier.ping(content(scope, object))
  end
end
