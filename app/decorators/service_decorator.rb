module ServiceDecorator
  def name
    type.sub(/Service\z/, '')
  end

  def icon_name
    name.downcase
  end
end
