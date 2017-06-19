import { CREATE_SERVICE, FETCH_SERVICE, UPDATE_SERVICE } from '../actions/serviceActions'

const initialState = {
  name: null,
  iconName: null,
  webhookUrl: null,
  channel: null,
  onPost: false,
  onComment: false
}

export default function service(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICE + '_SUCCESS':
    case UPDATE_SERVICE + '_SUCCESS':
    case CREATE_SERVICE + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}
