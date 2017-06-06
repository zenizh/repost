import { FETCH_POSTS, CREATE_POST } from '../actions/postsActions'
import { SET_STAR, UNSET_STAR } from '../actions/postActions'

const initialState = []

function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS + '_SUCCESS':
      return action.payload.data
    case CREATE_POST + '_SUCCESS':
      return [action.payload.data, ...state]
    case SET_STAR + '_SUCCESS':
      return state.map((post) => {
        if (post.id == action.payload.data.id) {
          return { ...post, starred: true }
        } else {
          return post
        }
      })
    case UNSET_STAR + '_SUCCESS':
      return state.map((post) => {
        if (post.id == action.payload.data.id) {
          return { ...post, starred: false }
        } else {
          return post
        }
      })
    default:
      return state
  }
}

export default posts
