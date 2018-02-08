module ApplicationHelper
  def flash_key(key)
    case key
    when 'alert' then 'danger'
    when 'notice' then 'success'
    end
  end

  def required_mark
    tag.span('*', class: 'text-danger')
  end
end
