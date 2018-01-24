class SlackWebhook < Webhook
  def notify(content)
    notifier = Slack::Notifier.new(url, channel: channel)
    notifier.ping(content)
  end
end
