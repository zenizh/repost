class SlackService < Service
  def channel
    super || 'general'
  end

  def notify(scope, data)
    notifier.ping(content(scope, data))
  end

  private

  def notifier
    Slack::Notifier.new(webhook_url, channel: channel)
  end
end
