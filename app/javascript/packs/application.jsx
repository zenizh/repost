import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history, store } from './store'
import './styles/application.global.scss'
import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
