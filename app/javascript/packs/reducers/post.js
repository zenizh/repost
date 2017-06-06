import { SET_POST, UNSET_POST } from '../actions/postActions'

const initialState = {
  content: null,
  createdAt: null,
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
    default:
      return state
  }
}
