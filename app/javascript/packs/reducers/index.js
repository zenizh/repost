import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import channels from './channels'
import currentUser from './currentUser'
import posts from './posts'

const rootReducer = combineReducers({
  channels,
  currentUser,
  posts,
  router: routerReducer
})

export default rootReducer
