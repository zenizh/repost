source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

gem 'rails', '~> 5.2.0.beta2'

gem 'active_decorator'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'bootstrap'
gem 'carender'
gem 'email_validator'
gem 'gemoji'
gem 'identicon'
gem 'jquery-rails'
gem 'kaminari'
gem 'material_icons'
gem 'mini_magick'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.11'
gem 'redcarpet'
gem 'sanitize'
gem 'sass-rails', '~> 5.0'
gem 'slack-notifier'
gem 'sorcery'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'validate_url'
gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.15'
  gem 'chromedriver-helper'
  gem 'pry-rails'
  gem 'selenium-webdriver'
  gem 'tapp'
end

group :development do
  gem 'brakeman', require: false
  gem 'bullet'
  gem 'letter_opener_web'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :production do
  gem 'google-cloud-storage', require: false
  gem 'aws-sdk-s3', require: false
  gem 'azure-storage', require: false
end
