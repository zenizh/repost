import {
  SET_POSTS
} from '../actions/postsActions'

const initialState = []

function posts(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts
    default:
      return state
  }
}

export default posts
