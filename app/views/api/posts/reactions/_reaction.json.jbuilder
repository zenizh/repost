json.extract! reaction, :id, :name
json.count reaction.post.reactions.named(reaction.name).count
json.is_reacted current_user.reactions.exists?(id: reaction)
json.user do
  json.name reaction.user.name
end
