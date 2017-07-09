import { FETCH_CHANNEL_USERS, FETCH_HOME_USERS, CLEAR_CHANNEL_USERS } from '../actions/channelUsersActions'
import { CREATE_SUBSCRIPTION, DELETE_SUBSCRIPTION } from '../actions/subscriptionsActions'

const initialState = []

function channelUsers(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_USERS + '_SUCCESS':
    case FETCH_CHANNEL_USERS + '_SUCCESS':
      return action.payload.data
    case CLEAR_CHANNEL_USERS:
      return initialState
    case CREATE_SUBSCRIPTION + '_SUCCESS':
      return [...state, action.payload.data]
    case DELETE_SUBSCRIPTION + '_SUCCESS':
      return state.filter((user) => {
        return user.id != action.payload.data.id
      })
    default:
      return state
  }
}

export default channelUsers
