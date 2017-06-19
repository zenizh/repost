export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts(url) {
  return {
    type: FETCH_POSTS,
    payload: {
      request: {
        url: url
      }
    }
  }
}
