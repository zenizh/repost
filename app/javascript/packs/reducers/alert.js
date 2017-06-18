import { CLEAR_ALERT } from '../actions/alertActions'
import { FETCH_CURRENT_USER } from '../actions/currentUserActions'
import { SET_TEAM } from '../actions/teamActions'
import { UPDATE_SERVICE } from '../actions/serviceActions'

const initialState = {
  type: null,
  messages: [],
  enabled: false
}

function alert(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER + '_SUCCESS':
      return {
        type: 'success',
        messages: ['Signed in successfully.'],
        enabled: true
      }
    case SET_TEAM + '_SUCCESS':
      return {
        type: 'success',
        messages: ['Updated team settings.'],
        enabled: true
      }
    case UPDATE_SERVICE + '_SUCCESS':
      return {
        type: 'success',
        messages: ['Updated WebHook settings.'],
        enabled: true
      }
    case FETCH_CURRENT_USER + '_FAIL':
      return {
        type: 'danger',
        messages: action.error.response.data.errors,
        enabled: true
      }
    case CLEAR_ALERT:
      return initialState
    default:
      return state
  }
}

export default alert
