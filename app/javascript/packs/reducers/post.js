import { SET_POST, UNSET_POST, SET_STAR, UNSET_STAR } from '../actions/postActions'

const initialState = {
  id: null,
  content: null,
  createdAt: null,
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
    case UNSET_POST:
      return initialState
    case SET_STAR + '_SUCCESS':
      return { ...state, starred: true }
    case UNSET_STAR + '_SUCCESS':
      return { ...state, starred: false }
    default:
      return state
  }
}
