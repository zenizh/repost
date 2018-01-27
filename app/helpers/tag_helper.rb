module TagHelper
  def typeahead_tags
    Tag.order(taggings_count: :desc).pluck(:name)
  end
end
