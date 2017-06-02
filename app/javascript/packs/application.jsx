import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import rootReducer from './reducers'
import Header from './containers/Header'
import Home from './containers/Home'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import SignOut from './containers/SignOut'
import Account from './containers/Account'
import { Authenticated, NotAuthenticated } from './lib/auth'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(routeMiddleware, thunk)
const enhancer = compose(middleware, persistState('currentUser'))
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Route path="/sign_up" component={NotAuthenticated(SignUp)} />
        <Route path="/sign_in" component={NotAuthenticated(SignIn)} />
        <Route exact path="/" component={Authenticated(Home)} />
        <Route path="/sign_out" component={Authenticated(SignOut)} />
        <Route path="/account" component={Authenticated(Account)} />
        <Route path="/channels/:id" component={Authenticated(Home)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
