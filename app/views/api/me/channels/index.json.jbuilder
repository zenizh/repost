json.array! current_user.channels do |channel|
  json.id channel.id
  json.name channel.name
  json.users_count channel.users.count
end
