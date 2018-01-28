module AutocompleteHelper
  def autocomplete_tag_names
    Tag.pluck(:name)
  end

  def autocomplete_user_screen_names
    User.active.pluck(:screen_name)
  end
end
