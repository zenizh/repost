import endpoints from '../config/endpoints'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

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

export function createPost(content) {
  return {
    type: CREATE_POST,
    payload: {
      request: {
        url: endpoints.posts,
        method: 'post',
        data: {
          content
        }
      }
    }
  }
}
