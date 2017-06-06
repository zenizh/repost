import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import channels from './channels'
import currentUser from './currentUser'
import post from './post'
import posts from './posts'
import users from './users'
import { SIGN_OUT_USER } from '../actions/currentUserActions'

const appReducer = combineReducers({
  channels,
  currentUser,
  post,
  posts,
  users,
  form: formReducer,
  router: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT_USER) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
