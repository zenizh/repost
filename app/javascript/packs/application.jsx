import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import './styles/application.global.scss'
import Routes from './routes'
import rootReducer from './reducers'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(routeMiddleware, thunk)
const enhancer = compose(middleware, persistState('currentUser'))
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
