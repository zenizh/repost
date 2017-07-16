const endpoints = {
  channel: (id) => `/api/channels/${id}.json`,
  channels: '/api/channels.json',
  channelPosts: (id) => `/api/channels/${id}/posts.json`,
  channelUsers: (id) => `/api/channels/${id}/users.json`,
  meChannels: '/api/me/channels.json',
  me: '/api/me.json',
  mePost: (id) => `/api/me/posts/${id}.json`,
  mePosts: '/api/me/posts.json',
  mePostsStarred: '/api/me/posts/starred.json',
  posts: '/api/posts.json',
  postReactions: (id) => `/api/posts/${id}/reactions.json`,
  postStars: (id) => `/api/posts/${id}/stars`,
  service: (id) => `/api/services/${id}.json`,
  services: '/api/services.json',
  session: '/api/session.json',
  team: '/api/team.json',
  user: (id) => `/api/users/${id}.json`,
  userChannelSubscription: (userId, channelId) => {
    return `/api/users/${userId}/channels/${channelId}/subscription.json`
  },
  userPosts: (id) => `/api/users/${id}/posts.json`,
  users: '/api/users.json'
}

export default endpoints
