import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(routeMiddleware, thunk)
const enhancer = compose(middleware, persistState('currentUser'))
const store = createStore(rootReducer, enhancer)

export { history, store }
