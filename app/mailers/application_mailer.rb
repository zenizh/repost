class ApplicationMailer < ActionMailer::Base
  default from: "noreply@#{default_url_options[:host]}"

  layout 'mailer'
end
