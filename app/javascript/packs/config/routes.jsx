import React from 'react'
import { Route } from 'react-router'
import { Authenticated, NotAuthenticated } from './auth'
import SignIn from '../features/SignIn'
import SignUp from '../features/SignUp'
import Home from '../features/Home'
import Channel from '../features/Channel'
import Services from '../features/Services'
import TeamSettings from '../features/TeamSettings'
import SignOut from '../features/SignOut'

const Routes = (props) => {
  return (
    <div>
      <Route path="/sign_in" component={NotAuthenticated(SignIn)} />
      <Route path="/sign_up" component={NotAuthenticated(SignUp)} />
      <Route exact path="/" component={Authenticated(Home)} />
      <Route path="/channels/:id" component={Authenticated(Channel)} />
      <Route path="/team/services" component={Authenticated(Services)} />
      <Route path="/team/settings" component={Authenticated(TeamSettings)} />
      <Route path="/sign_out" component={Authenticated(SignOut)} />
    </div>
  )
}

export default Routes