import { SET_SERVICE, UPDATE_SERVICE } from '../actions/serviceActions'

const initialState = {
  name: null,
  iconName: null,
  webhookUrl: null,
  channel: null,
  onPost: false,
  onComment: false,
  saved: false
}

export default function service(state = initialState, action) {
  switch (action.type) {
    case SET_SERVICE + '_SUCCESS':
      return action.payload.data
    case UPDATE_SERVICE + '_SUCCESS':
      return { ...action.payload.data, saved: true }
    default:
      return state
  }
}
