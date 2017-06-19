import { CLEAR_ALERT } from '../actions/alertActions'
import { SIGN_UP, SIGN_IN, UPDATE_CURRENT_USER } from '../actions/currentUserActions'
import { CREATE_POST, UPDATE_POST } from '../actions/postActions'
import { CREATE_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../actions/serviceActions'
import { UPDATE_TEAM } from '../actions/teamActions'

const initialState = {
  type: null,
  messages: [],
  enabled: false
}

const success = {
  type: 'success',
  messages: [],
  enabled: true
}

const fail = {
  type: 'danger',
  messages: [],
  enabled: true
}

function alert(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN + '_SUCCESS':
      return { ...success, messages: ['Signed in successfully.'] }
    case SIGN_UP + '_SUCCESS':
      return { ...success, messages: ['Created your account.'] }
    case UPDATE_CURRENT_USER + '_SUCCESS':
      return { ...success, messages: ['Updated user settings.'] }
    case CREATE_POST + '_SUCCESS':
      return { ...success, messages: ['Created new post.'] }
    case UPDATE_POST + '_SUCCESS':
      return { ...success, messages: ['Updated a post.'] }
    case CREATE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Created new WebHook.'] }
    case UPDATE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Updated WebHook settings.'] }
    case DELETE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Deleted a WebHook.'] }
    case UPDATE_TEAM + '_SUCCESS':
      return { ...success, messages: ['Updated team settings.'] }
    case SIGN_UP + '_FAIL':
    case SIGN_IN + '_FAIL':
    case UPDATE_CURRENT_USER + '_FAIL':
    case CREATE_POST + '_FAIL':
    case UPDATE_POST + '_FAIL':
    case CREATE_SERVICE + '_FAIL':
    case UPDATE_SERVICE + '_FAIL':
    case UPDATE_TEAM + '_FAIL':
      return { ...fail, messages: action.error.response.data.errors }
    case CLEAR_ALERT:
      return initialState
    default:
      return state
  }
}

export default alert
