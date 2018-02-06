module SearchHelper
  def link_to_search_by_starred(&block)
    link_to_search_by_boolean(:starred, &block)
  end

  def link_to_search_by_tag(tag, &block)
    link_to_search_by_array(:tags, tag.name, &block)
  end

  def link_to_search_by_user(user, &block)
    link_to_search_by_array(:users, user.screen_name, &block)
  end

  def link_to_search_by_boolean(attribute, &block)
    params = search_params

    if params[attribute] == 'true'
      active = true
      params[attribute] = nil
    else
      params[attribute] = true
    end

    link_to url_for(params), class: ('active' if active) do
      block.call
    end
  end

  def link_to_search_by_array(attribute, value, &block)
    params = search_params
    params[attribute] ||= []

    if value.in?(params[attribute])
      active = true
      params[attribute].delete(value)
    else
      active = true if params[attribute].empty?
      params[attribute] << value
    end

    link_to url_for(params), class: ('active' if active) do
      block.call
    end
  end
end
