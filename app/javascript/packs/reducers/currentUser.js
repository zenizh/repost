import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER
} from '../actions/currentUserActions'

const initialState = {
  id: null,
  email: null,
  token: null,
  signedIn: false
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser
    case UNSET_CURRENT_USER:
      return action.currentUser
    default:
      return state
  }
}

export default currentUser
