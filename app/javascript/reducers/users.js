import { FETCH_USERS } from '../actions/usersActions'

const initialState = []

function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default users
