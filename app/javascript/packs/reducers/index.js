import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import channels from './channels'
import currentUser from './currentUser'
import posts from './posts'
import { UNSET_CURRENT_USER } from '../actions/currentUserActions'

const appReducer = combineReducers({
  channels,
  currentUser,
  posts,
  router: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === UNSET_CURRENT_USER) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
