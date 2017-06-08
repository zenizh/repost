const endpoints = {
  channelPosts: (id) => `/api/channels/${id}/posts.json`,
  channelUsers: (id) => `/api/channels/${id}/users.json`,
  meChannels: '/api/me/channels.json',
  mePosts: '/api/me/posts.json',
  posts: '/api/posts.json',
  postStars: (id) => `/api/posts/${id}/stars`,
  services: '/api/services.json',
  session: '/api/session.json',
  team: '/api/team.json',
  users: '/api/users.json'
}

export default endpoints
