import { AUTHORIZE_AUTHOR } from '../actions/authorizeActions'
import { CREATE_POST, UPDATE_POST } from '../actions/postActions'
import { UPDATE_SERVICE } from '../actions/serviceActions'
import { REDIRECT } from '../actions/redirectActions'

const initialState = {
  url: null,
  enabled: false
}

function redirect(state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return initialState
    case AUTHORIZE_AUTHOR + '_FAIL':
      return { url: '/', enabled: true }
    case CREATE_POST + '_SUCCESS':
    case UPDATE_POST + '_SUCCESS':
      return { url: '/', enabled: true }
    case UPDATE_SERVICE + '_SUCCESS':
      return { url: '/team/services', enabled: true }
    default:
      return state
  }
}

export default redirect
