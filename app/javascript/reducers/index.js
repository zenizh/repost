import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import app from './app'
import alert from './alert'
import channel from './channel'
import channels from './channels'
import channelUsers from './channelUsers'
import currentUser from './currentUser'
import editor from './editor'
import post from './post'
import posts from './posts'
import redirect from './redirect'
import service from './service'
import services from './services'
import team from './team'
import user from './user'
import users from './users'
import { SIGN_OUT } from '../actions/currentUserActions'

const appReducer = combineReducers({
  app,
  alert,
  channel,
  channels,
  channelUsers,
  currentUser,
  editor,
  post,
  posts,
  redirect,
  service,
  services,
  team,
  user,
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
