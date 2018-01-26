module SearchHelper
  def link_to_search_by(attribute, type, value = nil, &block)
    params = search_params

    case type
    when :array
      params[attribute] ||= []

      if value.in?(params[attribute])
        params[attribute].delete(value)
        active = true
      else
        params[attribute] << value
      end
    when :boolean
      if params[attribute] == 'true'
        params[attribute] = nil
        active = true
      else
        params[attribute] = true
      end
    end

    link_to url_for(params), class: ('active' if active) do
      block.call
    end
  end
end
