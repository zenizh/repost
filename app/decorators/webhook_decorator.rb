module WebhookDecorator
  def service
    case type
    when 'SlackWebhook' then 'Slack'
    end
  end
end
