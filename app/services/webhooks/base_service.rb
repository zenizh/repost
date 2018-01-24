module Webhooks
  class BaseService
    include Rails.application.routes.url_helpers

    def notify
      webhooks.each { |webhook| webhook.notify(content) }
    end

    private

    def webhooks
      raise NotImplementedError
    end

    def content
      raise NotImplementedError
    end
  end
end
