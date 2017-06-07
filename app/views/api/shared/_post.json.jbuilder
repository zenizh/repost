json.id post.id
json.content post.content
json.created_at post.created_at
json.selected false
json.starred current_user.starred?(post)
json.user do
  json.screen_name post.user.screen_name
  json.name post.user.name
end
