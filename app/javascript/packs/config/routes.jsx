import React, { Component } from 'react'
import { Route } from 'react-router'
import { Authenticated, NotAuthenticated } from './auth'
import Account from '../containers/Account'
import Channel from '../containers/Channel'
import Home from '../containers/Home'
import SignUp from '../containers/SignUp'
import SignIn from '../containers/SignIn'
import SignOut from '../containers/SignOut'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/sign_in" component={NotAuthenticated(SignIn)} />
        <Route path="/sign_up" component={NotAuthenticated(SignUp)} />
        <Route exact path="/" component={Authenticated(Home)} />
        <Route path="/account" component={Authenticated(Account)} />
        <Route path="/channels/:id" component={Authenticated(Channel)} />
        <Route path="/sign_out" component={Authenticated(SignOut)} />
      </div>
    )
  }
}

export default Routes
