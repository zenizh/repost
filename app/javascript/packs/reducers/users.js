import { FETCH_USERS, FETCH_SUBSCRIPTIONS, CLEAR_USERS } from '../actions/usersActions'

const initialState = []

function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS + '_SUCCESS':
    case FETCH_SUBSCRIPTIONS + '_SUCCESS':
      return action.payload.data
    case CLEAR_USERS:
      return initialState
    default:
      return state
  }
}

export default users
