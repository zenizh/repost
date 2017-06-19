import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import alert from './alert'
import channels from './channels'
import currentUser from './currentUser'
import editor from './editor'
import post from './post'
import posts from './posts'
import redirect from './redirect'
import service from './service'
import services from './services'
import team from './team'
import users from './users'
import { SIGN_OUT } from '../actions/currentUserActions'

const appReducer = combineReducers({
  alert,
  channels,
  currentUser,
  editor,
  post,
  posts,
  redirect,
  service,
  services,
  team,
  users,
  form: formReducer,
  router: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
