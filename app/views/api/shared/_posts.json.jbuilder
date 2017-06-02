json.array! posts do |post|
  json.content post.content
  json.created_at post.created_at
  json.user do
    json.screen_name post.user.screen_name
    json.name post.user.name
  end
end
