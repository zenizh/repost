import { CLEAR_ALERT } from '../actions/alertActions'
import { FETCH_CURRENT_USER, UPDATE_CURRENT_USER, CREATE_USER } from '../actions/currentUserActions'
import { CREATE_POST } from '../actions/postActions'
import { SET_TEAM } from '../actions/teamActions'
import { UPDATE_SERVICE, DELETE_SERVICE } from '../actions/serviceActions'
import { CREATE_SERVICE } from '../actions/servicesActions'

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
    case FETCH_CURRENT_USER + '_SUCCESS':
      return { ...success, messages: ['Signed in successfully.'] }
    case UPDATE_CURRENT_USER + '_SUCCESS':
      return { ...success, messages: ['Updated user settings.'] }
    case CREATE_USER + '_SUCCESS':
      return { ...success, messages: ['Created your account.'] }
    case CREATE_POST + '_SUCCESS':
      return { ...success, messages: ['Created new post.'] }
    case SET_TEAM + '_SUCCESS':
      return { ...success, messages: ['Updated team settings.'] }
    case UPDATE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Updated WebHook settings.'] }
    case CREATE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Created new WebHook.'] }
    case DELETE_SERVICE + '_SUCCESS':
      return { ...success, messages: ['Deleted a WebHook.'] }
    case FETCH_CURRENT_USER + '_FAIL':
      return { ...fail, messages: action.error.response.data.errors }
    case CLEAR_ALERT:
      return initialState
    default:
      return state
  }
}

export default alert
