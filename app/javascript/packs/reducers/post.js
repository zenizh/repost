import { CREATE_POST, SET_POST, CLEAR_POST, CREATE_STAR, DELETE_STAR } from '../actions/postActions'

const initialState = {
  id: null,
  content: null,
  createdAt: null,
  selected: false,
  starred: false,
  user: {
    screenName: null,
    name: null
  }
}

export default function post(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return action.post
    case CLEAR_POST:
      return initialState
    case CREATE_STAR + '_SUCCESS':
      return { ...state, starred: true }
    case DELETE_STAR + '_SUCCESS':
      return { ...state, starred: false }
    default:
      return state
  }
}
