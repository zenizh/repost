json.extract! @reaction, :id, :name
json.count @reaction.post.reactions.named(@reaction.name).count
json.is_reacted true
json.user do
  json.name @reaction.user.name
end
