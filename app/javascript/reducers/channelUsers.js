import { FETCH_USERS } from '../actions/usersActions'
import { FETCH_CHANNEL_USERS, CLEAR_CHANNEL_USERS } from '../actions/channelUsersActions'

const initialState = []

function channelUsers(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS + '_SUCCESS':
    case FETCH_CHANNEL_USERS + '_SUCCESS':
      return action.payload.data
    case CLEAR_CHANNEL_USERS:
      return initialState
    default:
      return state
  }
}

export default channelUsers
