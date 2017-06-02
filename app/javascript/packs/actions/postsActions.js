export const SET_POSTS = 'SET_POSTS'

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
      .then(dispatch(fetchHomePosts(currentUser)))
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

function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}
