export const SET_POSTS = 'SET_POSTS'
export const PUSH_POST = 'PUSH_POST'

export function fetchHomePosts(currentUser) {
  return fetchPosts(currentUser, '/api/posts')
}

export function fetchCurrentUserPosts(currentUser) {
  return fetchPosts(currentUser, '/api/me/posts')
}

export function fetchChannelPosts(currentUser, id) {
  return fetchPosts(currentUser, `/api/channels/${id}/posts`)
}

export function registerPost(currentUser, content) {
  const options = {
    method: 'POST',
    headers: {
      'USER_EMAIL': currentUser.email,
      'USER_TOKEN': currentUser.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content
    })
  }
  return (dispatch) => {
    return fetch('/api/posts', options)
      .then(response => response.json())
      .then(response => dispatch(pushPost(response)))
  }
}

function fetchPosts(currentUser, url) {
  const options = {
    headers: {
      'USER_EMAIL': currentUser.email,
      'USER_TOKEN': currentUser.token
    }
  }
  return (dispatch) => {
    return fetch(url, options)
      .then(response => response.json())
      .then(response => dispatch(setPosts(response)))
  }
}

function pushPost(post) {
  return {
    type: PUSH_POST,
    post
  }
}

function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}
