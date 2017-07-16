name, count = reaction
users = Reaction.named(name).includes(:user).map(&:user)
json.name name
json.count count
json.is_reacted current_user.reactions.exists?(post: post, name: name)
json.users users, partial: 'api/users/user', as: :user
