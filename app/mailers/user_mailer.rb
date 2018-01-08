class UserMailer < ApplicationMailer
  def activation_needed_email(user)
    @user = user
    @url = new_users_activation_url(token: @user.activation_token)
    mail(to: user.email)
  end

  def activation_success_email(user)
    @user = user
    @url = sign_in_url
    mail(to: user.email)
  end

  def reset_password_email(user)
    @user = user
    @url = edit_users_password_url(token: user.reset_password_token)
    mail(to: user.email)
  end
end
