name, count = reaction
json.name name
json.count count
json.is_reacted current_user.reactions.exists?(post: post, name: name)
json.users Reaction.named(name).includes(:user).map(&:user)
