import { FETCH_POSTS, CREATE_POST } from '../actions/postsActions'

const initialState = []

function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS + '_SUCCESS':
      return action.payload.data
    case CREATE_POST + '_SUCCESS':
      return [action.payload.data, ...state]
    default:
      return state
  }
}

export default posts
