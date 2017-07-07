source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.2'
gem 'pg', '~> 0.21'
gem 'webpacker'
gem 'jbuilder', '~> 2.5'

gem 'rack-attack'
gem 'active_decorator'
gem 'kaminari'
gem 'paperclip'
gem 'pundit'
gem 'faker'
gem 'validates_email_format_of'
gem 'validate_url'
gem 'seed-fu'
gem 'sorcery'
gem 'slack-notifier', '= 2.1.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'pry-rails'
  gem 'selenium-webdriver'
end

group :development do
  gem 'bullet'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'puma', '~> 3.7'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'minitest-retry'
  gem 'webmock'
end

group :production do
  gem 'unicorn'
end
