import { FETCH_CHANNEL, UPDATE_CHANNEL, SET_CHANNEL, CLEAR_CHANNEL } from '../actions/channelActions'

const initialState = {
  id: null,
  name: null,
  editable: false,
  icon: 'hashtag'
}

function channel(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL + '_SUCCESS':
    case UPDATE_CHANNEL + '_SUCCESS':
      return { ...action.payload.data, editable: true, icon: 'hashtag' }
    case SET_CHANNEL:
      return { ...state, ...action.channel }
    case CLEAR_CHANNEL:
      return initialState
    default:
      return state
  }
}

export default channel
