module UserDecorator
  def role_value_for_change
    admin? ? 'member' : 'admin'
  end

  def role_label_for_change
    admin? ? 'Remove Admin' : 'Make Admin'
  end
end
