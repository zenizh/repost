import { REDIRECT, AUTHORIZE_AUTHOR } from '../actions/authorizeActions'

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
    default:
      return state
  }
}

export default redirect
