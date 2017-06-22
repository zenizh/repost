import { AUTHORIZE_AUTHOR } from '../actions/authorizeActions'
import { CREATE_CHANNEL, UPDATE_CHANNEL, DELETE_CHANNEL } from '../actions/channelActions'
import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../actions/postActions'
import { CREATE_SERVICE, UPDATE_SERVICE } from '../actions/serviceActions'
import { REDIRECT } from '../actions/redirectActions'

const initialState = {
  url: null,
  enabled: false
}

function redirect(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE_AUTHOR + '_FAIL':
      return { url: '/', enabled: true }
    case CREATE_CHANNEL + '_SUCCESS':
    case UPDATE_CHANNEL + '_SUCCESS':
      return { url: `/channels/${action.payload.data.id}`, enabled: true }
    case DELETE_CHANNEL + '_SUCCESS':
    case CREATE_POST + '_SUCCESS':
    case UPDATE_POST + '_SUCCESS':
      return { url: '/', enabled: true }
    case DELETE_POST + '_SUCCESS':
      return { url: action.pathname, enabled: true }
    case CREATE_SERVICE + '_SUCCESS':
    case UPDATE_SERVICE + '_SUCCESS':
      return { url: '/team/services', enabled: true }
    case REDIRECT:
      return initialState
    default:
      return state
  }
}

export default redirect
