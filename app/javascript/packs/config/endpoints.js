const endpoints = {
  channelPosts: (id) => `/api/channels/${id}/posts.json`,
  channelUsers: (id) => `/api/channels/${id}/users.json`,
  meChannels: '/api/me/channels.json',
  me: '/api/me.json',
  mePosts: '/api/me/posts.json',
  posts: '/api/posts.json',
  postStars: (id) => `/api/posts/${id}/stars`,
  service: (id) => `/api/services/${id}.json`,
  services: '/api/services.json',
  session: '/api/session.json',
  team: '/api/team.json',
  users: '/api/users.json'
}

export default endpoints
