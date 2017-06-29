import { FETCH_CHANNELS } from '../actions/channelsActions'

const initialState = []

function channels(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNELS + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default channels
