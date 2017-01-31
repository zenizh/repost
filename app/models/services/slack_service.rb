class SlackService < Service
  def channel
    super || 'general'
  end

  def notify(scope, data)
    notifier = Slack::Notifier.new(webhook_url, channel: channel)
    notifier.ping(content(scope, data))
  end
end
