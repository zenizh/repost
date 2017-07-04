import { FETCH_POSTS, ENABLE_FETCH_POSTS } from '../actions/postsActions'

const initialState = {
  hasMore: false
}

function app(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS + '_SUCCESS':
      if (action.payload.data.length != 0) {
        return { ...state, hasMore: true }
      } else {
        return { ...state, hasMore: false }
      }
    case ENABLE_FETCH_POSTS:
      return { ...state, hasMore: true }
    default:
      return state
  }
}

export default app
