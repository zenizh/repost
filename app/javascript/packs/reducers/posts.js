import {
  PUSH_POST,
  SET_POSTS
} from '../actions/postsActions'

const initialState = []

function posts(state = initialState, action) {
  switch (action.type) {
    case PUSH_POST:
      return [action.post, ...state]
    case SET_POSTS:
      return action.posts
    default:
      return state
  }
}

export default posts
