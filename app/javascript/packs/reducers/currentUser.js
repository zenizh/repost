import { SIGN_UP, SIGN_IN, UPDATE_CURRENT_USER } from '../actions/currentUserActions'

const initialState = {
  id: null,
  email: null,
  screenName: null,
  name: null,
  avatar: null,
  token: null,
  signedIn: false
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP + '_SUCCESS':
    case SIGN_IN + '_SUCCESS':
    case UPDATE_CURRENT_USER + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default currentUser
