import endpoints from '../config/endpoints'

export const SET_POSTS = 'SET_POSTS'
export const PUSH_POST = 'PUSH_POST'

export function fetchPosts(currentUser, url) {
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

export function createPost(currentUser, content) {
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
    return fetch(endpoints.posts, options)
      .then(response => response.json())
      .then(response => dispatch(pushPost(response)))
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
