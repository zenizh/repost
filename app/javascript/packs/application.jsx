import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import '../styles/application.global.scss'
import Routes from '../config/routes'
import { history, store } from '../config/store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
