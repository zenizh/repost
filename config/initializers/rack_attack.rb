class Rack::Attack
  Rack::Attack.cache.store = ActiveSupport::Cache::MemoryStore.new

  safelist('allow from localhost') do |request|
    request.ip == '127.0.0.1'
  end

  unless Rails.env.test?
    throttle('request/ip', limit: 100, period: 30.seconds) do |request|
      request.ip
    end
  end
end
