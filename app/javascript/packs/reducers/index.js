import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import channels from './channels'
import currentUser from './currentUser'
import editor from './editor'
import post from './post'
import posts from './posts'
import service from './service'
import services from './services'
import team from './team'
import users from './users'
import { SIGN_OUT_USER } from '../actions/currentUserActions'

const appReducer = combineReducers({
  channels,
  currentUser,
  editor,
  post,
  posts,
  service,
  services,
  team,
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
