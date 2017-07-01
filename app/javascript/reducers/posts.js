import { FETCH_POSTS } from '../actions/postsActions'
import { SET_POST, CREATE_STAR, DELETE_STAR } from '../actions/postActions'

const initialState = []

function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS + '_SUCCESS':
      return action.payload.data
    case SET_POST:
      return state.map((post) => {
        if (post.id == action.post.id) {
          return { ...post, selected: true }
        } else {
          return { ...post, selected: false }
        }
      })
    case CREATE_STAR + '_SUCCESS':
      return state.map((post) => {
        if (post.id == action.payload.data.id) {
          return { ...post, starred: true }
        } else {
          return post
        }
      })
    case DELETE_STAR + '_SUCCESS':
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
