require_relative 'boot'

require 'rails'
require 'action_controller/railtie'
# require 'action_mailer/railtie'
require 'action_view/railtie'
# require 'active_job/railtie'
require 'active_model/railtie'
require 'active_record/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Repost
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.autoload_paths += %W(
      #{config.root}/app/models/services
    )

    config.middleware.use Rack::Attack
  end
end
