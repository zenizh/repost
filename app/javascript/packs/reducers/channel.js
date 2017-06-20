import { FETCH_CHANNEL, SET_CHANNEL } from '../actions/channelActions'

const initialState = {
  id: null,
  name: null
}

function channel(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL + '_SUCCESS':
      return action.payload.data
    case SET_CHANNEL:
      return action.channel
    default:
      return state
  }
}

export default channel
