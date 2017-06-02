import {
  SET_CHANNELS
} from '../actions/channelsActions'

const initialState = []

function channels(state = initialState, action) {
  switch (action.type) {
    case SET_CHANNELS:
      return action.channels
    default:
      return state
  }
}

export default channels
