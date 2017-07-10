import { FETCH_USER } from '../actions/userActions'

const initialState = {
  id: null,
  name: null,
  screenName: null,
  avatar: null
}

function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default user
