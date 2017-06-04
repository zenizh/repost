import React, { Component } from 'react'
import { Route } from 'react-router'
import { Authenticated, NotAuthenticated } from './auth'
import Header from '../containers/Header'
import Home from '../containers/Home'
import SignUp from '../containers/SignUp'
import SignIn from '../containers/SignIn'
import SignOut from '../containers/SignOut'
import Account from '../containers/Account'
import Channel from '../containers/Channel'

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/sign_up" component={NotAuthenticated(SignUp)} />
        <Route path="/sign_in" component={NotAuthenticated(SignIn)} />
        <Route exact path="/" component={Authenticated(Home)} />
        <Route path="/sign_out" component={Authenticated(SignOut)} />
        <Route path="/account" component={Authenticated(Account)} />
        <Route path="/channels/:id" component={Authenticated(Channel)} />
      </div>
    )
  }
}

export default Routes
