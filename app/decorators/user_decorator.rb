module UserDecorator
  def avatar_with_default(size: 48)
    if avatar.attached?
      avatar.variant(gravity: 'center', resize: "#{size}x#{size}^", crop: "#{size}x#{size}+0+0")
    else
      Identicon.data_url_for(id, size)
    end
  end

  def name_with_default
    name.presence || screen_name
  end

  def role_value_for_update
    admin? ? 'member' : 'admin'
  end

  def role_label_for_update
    admin? ? 'Remove Admin' : 'Make Admin'
  end

  def unread_notifications_count
    @count ||= notifications.unread.count
  end
end
