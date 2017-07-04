export const FETCH_POSTS = 'FETCH_POSTS'
export const CLEAR_POSTS = 'CLEAR_POSTS'
export const ENABLE_FETCH_POSTS = 'ENABLE_FETCH_POSTS'

export function fetchPosts(url, page = 1) {
  return {
    type: FETCH_POSTS,
    payload: {
      request: {
        url: url + `?page=${page}`
      }
    }
  }
}

export function clearPosts() {
  return {
    type: CLEAR_POSTS
  }
}

export function enableFetchPosts() {
  return {
    type: ENABLE_FETCH_POSTS
  }
}
