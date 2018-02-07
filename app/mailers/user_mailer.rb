class UserMailer < ApplicationMailer
  def activation_needed_email(user)
    @user = user
    @url = new_users_activation_url(token: @user.activation_token)
    mail(to: user.email, subject: '[Repost] Welcome to Repost')
  end

  def activation_success_email(user)
    @user = user
    @url = sign_in_url
    mail(to: user.email, subject: '[Repost] Your account has been activated')
  end

  def reset_password_email(user)
    @user = user
    @url = edit_users_password_url(token: user.reset_password_token)
    mail(to: user.email, subject: '[Repost] Your password has been reset')
  end
end
