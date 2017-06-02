import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import channels from './channels'
import currentUser from './currentUser'
import posts from './posts'
import users from './users'
import { UNSET_CURRENT_USER } from '../actions/currentUserActions'

const appReducer = combineReducers({
  channels,
  currentUser,
  posts,
  users,
  router: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === UNSET_CURRENT_USER) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
