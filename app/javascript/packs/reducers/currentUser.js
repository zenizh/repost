import { FETCH_CURRENT_USER, CREATE_USER, UPDATE_CURRENT_USER } from '../actions/currentUserActions'

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
    case FETCH_CURRENT_USER + '_SUCCESS':
    case CREATE_USER + '_SUCCESS':
    case UPDATE_CURRENT_USER + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default currentUser
